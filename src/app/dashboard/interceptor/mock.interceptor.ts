import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { catchError, Observable, of, throwError } from 'rxjs';

import { ActionRequest, TypeRequest } from "../models/model";

@Injectable(
  {providedIn: 'root'}
)
export class MockInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if(error.status === 504)
        {
          if(request.method.toLocaleLowerCase() === 'post' && !(request.body instanceof FormData))  {
            if((request?.body as any as ActionRequest)?.action === TypeRequest.params) {
              return of(new HttpResponse(
                { status: 200, body: {
                  count: '10',
                  delay: '10'} }
              ));
            } else {
              return of(new HttpResponse(
                { status: 200, body: {
                  status: Date.now()} }
              ));
            }
          }
        } return throwError(error);
      })

    );
  }
}
