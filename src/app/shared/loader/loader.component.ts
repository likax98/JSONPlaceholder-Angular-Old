import { LoaderService } from './../../core/services/loader.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  //
  isLoader = false;

  //
  private unsubscribe$ = new Subject();
  
  //
  constructor(private loaderService: LoaderService) {}

  //
  ngOnInit(): void {
    this.loaderService.loader.subscribe((changeLoader) => {
      this.isLoader = changeLoader;
    });
  }

  //
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
