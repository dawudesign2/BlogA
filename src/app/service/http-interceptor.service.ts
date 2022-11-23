import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let username = 'David'
    let password = '1234'
    let basic = "Basic " + window.btoa(username + ":" + password);
    req = req.clone({
      setHeaders: {
        Authorization: basic
      }
    });
    return next.handle(req);
  }
}
