import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsRoutingModule } from './albums-routing.module';
import {NgxGalleryModule} from '@kolkov/ngx-gallery';

import { SharedModule } from './../../shared/shared.module';


@NgModule({
  declarations: [AlbumsRoutingModule.Components],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    NgxGalleryModule,
    SharedModule
  ]
})
export class AlbumsModule { }
