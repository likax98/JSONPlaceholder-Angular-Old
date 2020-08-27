import { PostComment } from './../../../models/comment';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss']
})
export class PostCommentComponent implements OnInit {
  @Input() comment: PostComment = new PostComment();

  constructor() { }

  ngOnInit(): void {
  }

}
