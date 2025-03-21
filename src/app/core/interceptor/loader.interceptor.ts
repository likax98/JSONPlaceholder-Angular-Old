import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { LoaderService } from './../services/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  //
  constructor(private loaderService: LoaderService) {}

  //
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loaderService.showLoader();
    return next
      .handle(req)
      .pipe(finalize(() => this.loaderService.hideLoader()));
  }
}
