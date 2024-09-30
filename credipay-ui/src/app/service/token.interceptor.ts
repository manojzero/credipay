import { HttpErrorResponse, HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode'
import { catchError, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { NgxSpinnerService } from 'ngx-spinner';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("000000000000000000000000");
  // let authService: AuthService;
  const router = inject(Router);
  const spinner = inject(NgxSpinnerService);
  const authService = inject(AuthService);
  // let router: Router;
  // let spinner: NgxSpinnerService;

  let contenttype: any = "";
  if (req.headers.has('Content-Type')) {
    contenttype = req.headers.get('Content-Type');
  }
  var new_request: any = {};
  if (contenttype) {
    new_request = req.clone({
      withCredentials: true,
      headers: new HttpHeaders({
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Expires': '0',
        'Surrogate-Control': 'no-store',
        'Content-Type': contenttype
      })
    })
  }
  else {
    new_request = req.clone({
      withCredentials: true,
      headers: new HttpHeaders({
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Expires': '0',
        'Surrogate-Control': 'no-store'
      })
    })
  };

  return next(new_request).pipe(
    catchError((err: any) => {


      if (err instanceof HttpErrorResponse) {
        // Handle HTTP errors
        if (err.status === 401) {
          // Specific handling for unauthorized errors     
          if (typeof window !== 'undefined' && window.localStorage) {
            console.error('Unauthorized request:', err);
            // You might trigger a re-authentication flow or redirect the user here
            authService.logOut().
              subscribe((res: any) => {
                localStorage.clear()
                router.navigateByUrl('');
                // window.location.reload();
                spinner.hide()
              }, (err) => {
                spinner.hide()
                localStorage.clear()
                router.navigate(['login'])
                window.location.reload();
              })
            localStorage.clear();
          }
        } else {
          // Handle other HTTP error codes
          console.error('HTTP error:', err);
          return throwError(() => err);
        }
      } else {
        // Handle non-HTTP errors
        console.error('An error occurred:', err);
        return throwError(() => err);
      }

      // Re-throw the error to propagate it further
      return throwError(() => err);
    }
    )
  )

  // let router = inject(Router);
  // let token: any = '';
  // if (typeof window !== 'undefined' && window.localStorage) {
  //   token = localStorage.getItem('token');
  // }

  // if (token) {
  //   let decodedToken = jwtDecode(token);

  //   const isExpired = decodedToken && decodedToken.exp ? decodedToken.exp < Date.now() / 1000 : false;

  //   if (isExpired) {
  //     console.log('Token expired');
  //     if (typeof window !== 'undefined' && window.localStorage) {
  //       localStorage.removeItem('token');
  //     }
  //     router.navigateByUrl('/login');
  //   } else {
  //     console.log("Token not expired");
  //   }
  // } else {
  //   console.log('no token');
  //   router.navigateByUrl('/login');
  // }

  // return next(req);
};
function ngOnInit() {
  throw new Error('Function not implemented.');
}

