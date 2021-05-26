import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        retry(3),
        catchError((error: HttpErrorResponse) => {
          const objError = {
            code: error.status,
            message: error.message,
            source: 'Server Side'
          };

          if (error.error instanceof ErrorEvent) {
            objError.source = 'Client Side';
          }

          return throwError(objError);
        })
      );
  }
}
