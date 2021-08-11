import { PostComment } from './../../../models/comment';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss'],
})
export class PostCommentComponent {
  //
  @Input()
  comment: PostComment;
}
