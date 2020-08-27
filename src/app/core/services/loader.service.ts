import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
 public loader = new BehaviorSubject<boolean>(false);

  constructor() {}

  public showLoader(): void {
    this.loader.next(true);
  }

  public hideLoader(): void {
    this.loader.next(false);
  }
}
