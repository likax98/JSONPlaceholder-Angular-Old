import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbumsTableComponent } from './albums-table/albums-table.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AlbumsTableComponent,
  },
  {
    path: ':id',
    component: AlbumDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumsRoutingModule {
  static Components = [AlbumsTableComponent, AlbumDetailsComponent];
}
