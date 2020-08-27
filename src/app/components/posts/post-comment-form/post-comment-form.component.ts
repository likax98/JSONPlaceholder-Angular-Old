import { PostComment } from './../../../models/comment';
import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-comment-form',
  templateUrl: './post-comment-form.component.html',
  styleUrls: ['./post-comment-form.component.scss']
})
export class PostCommentFormComponent implements OnInit {
  public newComment: PostComment = new PostComment;
  @ViewChild('form') form: NgForm;
  @Output() sendComment: EventEmitter<PostComment> = new EventEmitter<PostComment>();
  constructor() { }

  ngOnInit(): void {
  }

  addComment(form: NgForm) {
    // console.log(form.value);
    if (!form.valid)  {
      return;
    }
    // this.commentService.savePost(form.value).subscribe((resp) => {
    //   this.newComment.emit(form.value);
    //   this.form.reset();
    // });

       this.sendComment.emit(form.value);
      this.form.reset();
  }


}
