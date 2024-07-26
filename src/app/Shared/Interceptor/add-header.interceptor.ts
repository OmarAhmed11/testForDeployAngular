import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/Services/token.service';

@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {
    this.tokenService.TokenAfterLogin$.subscribe(result => {
      this.token = localStorage.getItem('token');
    })
  }
  token = localStorage.getItem('token');
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const clonedRequest = request.clone({ headers: request.headers.set('Authorization', 'Bearer '+this.token) });

    return next.handle(clonedRequest);
  }
}
