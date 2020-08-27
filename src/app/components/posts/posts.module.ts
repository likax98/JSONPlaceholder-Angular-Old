import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { PostsRoutingModule } from './posts-routing.module';
import { PostCommentFormComponent } from './post-comment-form/post-comment-form.component';
import { AddPostFormComponent } from './add-post-form/add-post-form.component';

@NgModule({
  declarations: [PostsRoutingModule.Components, PostCommentFormComponent, AddPostFormComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class PostsModule {}
