import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  public headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  getuserdetailURL = environment.apiURL + "user/get-userbyid";
  private updateProfileUrl = environment.apiURL + "user/update-user";
 
  constructor(private http: HttpClient, private spinner: NgxSpinnerService, private router: Router) {
  }

  getuserdetails(id?: any): Observable<any> {
    return this.http.get<any>(this.getuserdetailURL, { headers: this.headers, withCredentials: true });
  }

  updateProfile(id: any, data: any): Observable<any> {
    console.log("errororororor" + id)
    return this.http.put<any>(this.updateProfileUrl + "/" + id, data, { 'headers': this.headers, withCredentials: true });
  }

 
}
