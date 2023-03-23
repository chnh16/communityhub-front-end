import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private messageService: MessageService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap({
        next: (event) => {
          if (event instanceof HttpResponse) {
            if (event.body.message) {
              this.messageService.add({ severity: 'success', summary: 'Berhasil', detail: event.body.message })
            }
          }
        },
        error: (event) => {
          if (event instanceof HttpErrorResponse) {
            this.messageService.add({ severity: 'error', summary: 'Gagal', detail: event.error.message })
            if (event.status == 401) {
              this.router.navigateByUrl('/login')
            }
          }
        },
        complete: () => { }
      })
    );
  }
}
