import {  Router } from '@angular/router';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpXsrfTokenExtractor
} from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';

import { AuthService } from '../auth.service';
import { Globals } from '../../utils/globals';
import { Injectable } from '@angular/core';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(public authService: AuthService, private router: Router, public global: Globals) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // const cookieheaderName = 'X-XSRF-TOKEN';
    // let csrfToken = this.tokenExtractor.getToken() as string;

    // if (csrfToken !== null && !request.headers.has(cookieheaderName)) {
    //   request = request.clone({ headers: request.headers.set(cookieheaderName, csrfToken) });
    // }

    const new_request = request.clone({
      withCredentials : true
    })

    return next.handle(new_request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMsg = '';
          if (error.error instanceof ErrorEvent) {

            errorMsg = `Error: ${error.error.message}`;
          }
          else {

            errorMsg = `Error Code: ${error.status},  Message: ${error.error.message}`;
          }

          console.log(error.error.status)

          if(error.status == 401){
            this.logout();
          }

          return throwError(error);
        })
      )

  }


  logout(){
    this.authService.logOut().subscribe({
        next: (data) => {
            localStorage.clear();
            this.global.setloginuserinfo({});
            this.router.navigate([''])
        },
      });
  }
}
