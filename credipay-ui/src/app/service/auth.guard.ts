import { ActivatedRouteSnapshot,ActivatedRoute , CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ProfileService } from "../service/profile.service";
import { Globals } from '../utils/globals';
import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    public global: Globals,
    private readonly location: Location,
    public profServ: ProfileService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute
) { 
 
}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot,):any {   
      this.spinner.show();
      return this.profServ.getuserdetails().pipe(map((response: any) => {
        this.spinner.hide();
        if (response) {
          if (typeof window !== 'undefined' && window?.localStorage) {
           localStorage.setItem('isloggedin', "true");
          }
          this.global.setloginuserinfo(response?.result);

            return true;
        }
        else{
            return false;
        }
      }), catchError((error) => {
        this.spinner.hide();
          this.global.setloginuserinfo({});
          if (typeof window !== 'undefined' && window?.localStorage) {
            localStorage.clear();
           }
         
          this.router.navigate([''])
          return of(true);
      }));
   
  }

}
