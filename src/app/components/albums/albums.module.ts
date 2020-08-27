import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsRoutingModule } from './albums-routing.module';

import { SharedModule } from './../../shared/shared.module';
import { AlbumPhotoSliderComponent } from './album-photo-slider/album-photo-slider.component';
import { NgImageSliderModule } from 'ng-image-slider';


@NgModule({
  declarations: [AlbumsRoutingModule.Components, AlbumPhotoSliderComponent],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    NgImageSliderModule,
    SharedModule
  ]
})
export class AlbumsModule { }
