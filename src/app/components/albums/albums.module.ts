import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsRoutingModule } from './albums-routing.module';

import { SharedModule } from './../../shared/shared.module';
import { NgImageSliderModule } from 'ng-image-slider';


@NgModule({
  declarations: [AlbumsRoutingModule.Components],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    NgImageSliderModule,
    SharedModule
  ]
})
export class AlbumsModule { }
