import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsTableComponent } from './posts-table/posts-table.component';
import { PostCommentComponent } from './post-comment/post-comment.component';

import { PostDetailsComponent } from './post-details/post-details.component';

const routes: Routes = [
  { path: '', component: PostsTableComponent },
  {path: ':id', component: PostDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {
  static Components = [
    PostsTableComponent,
    PostDetailsComponent,
    PostCommentComponent
  ];
}
