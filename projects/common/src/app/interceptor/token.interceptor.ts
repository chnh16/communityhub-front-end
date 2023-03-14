import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private userService : UserService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(request.headers.get('skip') === 'true'){
      return next.handle(request)
    }

    const reqClone = request.clone({headers : new HttpHeaders().append('Authorization', `Bearer ${this.userService.setData}`)})

    return next.handle(reqClone)
  }
}
