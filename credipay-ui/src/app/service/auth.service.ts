import { EnvironmentInjector, inject, Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, Observable, Subject, switchMap, timer } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { environment } from '../../environment/environment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private environmentInjector = inject(EnvironmentInjector);
  private updateProfileUrl = "";
  dossierValue: string = "";
  private getDossierDetailsUrl = "";
  public getExpiresTime;
  public readonly timeout: number | Date | any; // 2 minutes in milliseconds
  public readonly warningTime: number | Date | any; // 1 minute warning time
  // private readonly timeout = 100* 60 * 1000; // 2 minutes in milliseconds
  // private readonly warningTime = (100 * 60 * 1000) - 30; // 1 minute warning time
  private logoutTimer: any;
  private warningTimer: any;
  // private logoutTimer = timer(this.timeout);
  // private warningTimer = timer(this.warningTime);
  private inactivityTimer = new Subject<void>();
  private getPartcularDossierDetailsUrl = "";
  // public headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  public headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  // public headers = { 'content-type': 'application/json' }
  //  headers = { 'content-type': 'application/json' }


  private username = new BehaviorSubject<string>('');
  public userLoggedIn = new Subject<boolean>();
  currentUsername = this.username.asObservable();
  loginURL: string = environment.apiURL + "login/user-login";
  logoutUrl: string = environment.apiURL + "login/user-logout"
  refreshTokenURL: string = environment.apiURL + "login/token-refresh"

  constructor(private http: HttpClient, private spinner: NgxSpinnerService, private router: Router, private ngZone: NgZone) {
    if (typeof window !== 'undefined') {
      console.log("localStorage.getItem('dossier')" + localStorage.getItem('dossier'));
      this.dossierValue = localStorage.getItem('finalToken') as string;
      if (localStorage.getItem('dossier') != undefined || localStorage.getItem('dossier') != null) {
        let jwtToken = new Date(this.dossierValue);
        const valuesData = new Date()
        localStorage.setItem('expires', JSON.stringify(Number(jwtToken.valueOf()) - Number(valuesData)))
        this.getExpiresTime = JSON.parse(localStorage.getItem('expires') as string)
        console.log(" logged in " + this.getExpiresTime)
        this.logoutTimer = timer(jwtToken)
        this.warningTimer = timer(this.getExpiresTime)
        this.startInactivityTimer();
      } else {
        console.log("not logged in ");
      }
    }
    this.userLoggedIn.next(false);
  }

  changeUsername(username: string) {
    this.username.next(username);
  }
  login(body: any): Observable<any> {
    return this.http.post<any>(this.loginURL, body, {
      headers: this.headers,
      withCredentials: true
    })
  }

  setUserLoggedIn(userLoggedIn: boolean) {
    this.userLoggedIn.next(userLoggedIn);
    console.log("User logged in ", this.userLoggedIn)
  }

  logout(dossier_id: any): Observable<boolean> {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('dossier')
      this.router.navigateByUrl('')
      setTimeout(() => {
        if (typeof window !== 'undefined') {
          window.location.reload();
        }
        this.spinner.hide();
      }, 1000);
      setTimeout(() => {
        this.router.navigateByUrl('')
      }, 1500);
    }
    return this.http.post<any>(this.logoutUrl + "/" + dossier_id, { 'headers': this.headers, withCredentials: true });
  }

  logOut() {
    // if (this.clearTimeout) {
    //   clearTimeout(this.clearTimeout);
    // }
    let dossier_id: any;
    console.log("inside logout")
    if (typeof window !== 'undefined') {
      dossier_id = window.localStorage.getItem('dossier');
    }
    console.log("===============iiiiiiiiiiiiiii" + dossier_id);

    // return this.http.post<any>(this.logoutUrl + "/", dossier_id, { 'headers': this.headers,withCredentials: true })
    return this.http.post<any>(this.logoutUrl, { 'headers': this.headers, withCredentials: true })
    // this.http.post<any>(this.logoutURL, null, { withCredentials: true })
    // localStorage.clear();
    // this.router.navigate(['']);

  }

  getUserLoggedIn(): Observable<boolean> {
    return this.userLoggedIn.asObservable();
  }
  updateProfile(data: any, id: any): Observable<any> {
    const headers = { 'content-type': 'application/json' }

    return this.http.put<any>(this.updateProfileUrl + "/" + id, data, { 'headers': headers, withCredentials: true });
  }

  getDossierDetails() {
    const headers = { 'content-type': 'application/json' }

    return this.http.get<any>(this.getDossierDetailsUrl, { 'headers': headers, withCredentials: true })
  }

  getPartcularDossierDetails(dossier_no: any) {
    const headers = { 'content-type': 'application/json' }

    return this.http.get<any>(this.getPartcularDossierDetailsUrl + "/" + dossier_no, { 'headers': headers, withCredentials: true })
  }
  getuserdetailURL = environment.apiURL + "user/get-userbyid";
  getuserdetails(id: any): Observable<any> {
    return this.http.get<any>(this.getuserdetailURL + "/" + id, { 'headers': this.headers, withCredentials: true });
  }
  generateRefreshToken(body: any): Observable<any> {
    return this.http.post<any>(this.refreshTokenURL, body, {
      headers: this.headers,
      withCredentials: true
    });
  }


  startInactivityTimer() {
    this.ngZone.runOutsideAngular(() => {

      // this.inactivityTimer
      //   .pipe(switchMap(() => this.logoutTimer))
      // .subscribe(() => this.logout(localStorage.getItem('dossier')));
      // .subscribe(() => this.logOut());

      this.inactivityTimer
        .pipe(switchMap(() => this.warningTimer))
        .subscribe(() => this.showWarning());

      this.resetTimers(); // Initial call to start the timers   
    });
  }

  resetTimers() {
    this.inactivityTimer.next();
  }

  showWarning() {
    let timerInterval: any;
    const warningDuration = 30;
    let loggedout = true;
    let timeLeft = warningDuration;
    let timers: any;
    Swal.fire({
      title: "Warning!",
      html: "You will be automatically logged out in  <b></b><br>  seconds ",
      icon: "warning",
      showDenyButton: true,
      // showCancelButton: true,
      confirmButtonColor: "#3085d6",
      timer: 30000,
      timerProgressBar: true,
      confirmButtonText: "logout",
      denyButtonText: "Refresh",
      didOpen: () => {
        timers = Swal.getPopup()?.querySelector("b");
        timerInterval = setInterval(() => {
          timers.textContent = `${Swal.getTimerLeft()}`;
          timers.textContent = Math.trunc(timers.textContent / 1000);
        }, 1000);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      if (result.isConfirmed) {
        if (typeof window !== 'undefined') {
          localStorage.clear();
          this.logOut().subscribe({
            next: (value) => {
              console.log("logout successfull" + value);
              setTimeout(() => {
                Swal.fire("logout successfull", "", "success");
              }, 3000);
            }, error: (err) => {
              console.log("errrorrr logout failed");
              setTimeout(() => {
                this.spinner.hide();
              }, 3000);
            }, complete: () => {
              console.log("logout completed");
              loggedout = false;
              setTimeout(() => {
                this.spinner.hide();
              }, 3000);
            },
          });
          this.spinner.show();
          this.router.navigateByUrl('');
          setTimeout(() => {
            window.location.reload();
            this.spinner.hide();
          }, 3000);
        }
      } else if (result.isDenied) {
        if (typeof window !== 'undefined') {
          let login_details = JSON.parse(window.localStorage.getItem('response') as any);
          console.log("-----------login_details---------", login_details);

          this.generateRefreshToken(login_details).subscribe({
            next: (data: any) => {
              console.log("logged in suceessfully");
              if (typeof window !== "undefined") {
                window.localStorage.setItem("dossier", data.response.dossier_id);
                window.localStorage.setItem("finalToken", data.response.finalToken);
                window.localStorage.setItem("response", JSON.stringify(data.response));
                window.location.reload();
              }
              Swal.fire("Refresh token", "", "info");
            },
            error: (err: any) => {
              console.log("logged in failure", err.error.message.response);
              this.spinner.hide();
              // this.toastr.error(err)
            },
            complete: () => {
              loggedout = false;
              setTimeout(() => {
                this.spinner.hide();
              }, 3000);
              console.log("logged in complete");
            },
          })

        }

      }
    })
    if (loggedout) {
      setTimeout(() => {
        if (typeof window !== 'undefined') {
          localStorage.clear();
          this.logOut().subscribe({
            next: (value) => {
              console.log("logout successfull" + value);
              setTimeout(() => {
                Swal.fire("logout successfull", "", "success");
              }, 3000);
            }, error: (err) => {
              console.log("errrorrr logout failed");
              setTimeout(() => {
                this.spinner.hide();
              }, 3000);
            }, complete: () => {
              console.log("logout completed");
              setTimeout(() => {
                this.spinner.hide();
              }, 3000);
            },
          });
          this.spinner.show();
          this.router.navigateByUrl('');
          setTimeout(() => {
            window.location.reload();
            this.spinner.hide();
          }, 3000);
        }
      }, 30000);
      console.log('Warning: You will be logged out soon due to inactivity.');
    }
  }



}
