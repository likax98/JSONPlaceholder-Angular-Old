import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostComment } from './../../../models/comment';

@Component({
  selector: 'app-post-comment-form',
  templateUrl: './post-comment-form.component.html',
  styleUrls: ['./post-comment-form.component.scss'],
})
export class PostCommentFormComponent {
  //
  @ViewChild('form') form: NgForm;

  //
  @Output()
  sendComment = new EventEmitter<PostComment>();

  //
  newComment: PostComment;

  //
  addComment(form: NgForm): void {
    if (!form.valid) {
      return;
    }

    this.sendComment.emit(form.value);
    this.form.reset();
  }
}
