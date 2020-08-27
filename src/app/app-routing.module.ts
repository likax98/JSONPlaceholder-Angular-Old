import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { WildCardComponent } from './components/wild-card/wild-card.component';

const routes: Routes = [
  {
    path: 'posts',
    loadChildren: () =>
      import('./components/posts/posts.module').then((m) => m.PostsModule),
  },
  {
    path: 'albums',
    loadChildren: () =>
      import('./components/albums/albums.module').then((m) => m.AlbumsModule),
  },
  {
    path: 'todos',
    loadChildren: () =>
      import('./components/todos/todos.module').then((m) => m.TodosModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '**', component: WildCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
