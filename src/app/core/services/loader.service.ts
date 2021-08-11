import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  //
  loader = new BehaviorSubject<boolean>(false);

  //
  showLoader(): void {
    this.loader.next(true);
  }

  //
  hideLoader(): void {
    this.loader.next(false);
  }
}
