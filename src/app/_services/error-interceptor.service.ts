import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse) {
           if (error.status === 401) {
            return throwError(error.statusText);
          }
           const applicationError = error.headers.get('Application-Error');
           if (applicationError) {
            console.error(applicationError);
            return throwError(applicationError);
          }
           const serverError = error.error;
           console.log(serverError);
           let modalStateError = '';
           if (serverError && typeof serverError === 'object') {
            console.log(serverError);
            for (const key in serverError) {
              if (serverError[key]) {
                console.log('test111', serverError[key]);
                modalStateError += serverError[key] + '\n';
              }
            }
            return throwError(modalStateError || serverError || 'Server Error');
          }
        }
      })
    );
  }
}

export const ErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true
};
