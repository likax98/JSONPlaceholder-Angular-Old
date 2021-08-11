import { NgForm } from '@angular/forms';
import { PostsService } from 'src/app/core/services/posts.service';
import { Post } from 'src/app/models/post';
import {
  Component,
  OnInit,
  ViewChild,
  EventEmitter,
  Output,
} from '@angular/core';
import { User } from 'src/app/models/user';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-add-post-form',
  templateUrl: './add-post-form.component.html',
  styleUrls: ['./add-post-form.component.scss'],
})
export class AddPostFormComponent {
  //
  @ViewChild('form') form: NgForm;
  //
  @Output() newPost: EventEmitter<Post> = new EventEmitter<Post>();

  //
  post: Post;

  //
  private unsubscribe$ = new Subject();

  //
  constructor(private postsService: PostsService) {}

  //
  addPost(form: any): void {
    if (!form.valid) {
      alert('Please enter form');
      return;
    }

    this.postsService
      .addPost(form.value)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.newPost.emit(form.value);
        this.form.reset();
      });
  }

  //
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
