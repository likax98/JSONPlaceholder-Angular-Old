import { NgForm } from '@angular/forms';
import { PostComment } from './../../../models/comment';
import { PostsService } from './../../../core/services/posts.service';

import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from 'src/app/models/post';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit, OnDestroy {
  //
  @ViewChild('form') form: NgForm;

  //
  @Output()
  editedPost = new EventEmitter<Post>();

  //
  post: Post;

  //
  comments: PostComment[] = [];

  //
  isEditMode = false;

  //
  private unsubscribe$ = new Subject();

  //
  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  //
  ngOnInit(): void {
    this.listenRoute();
  }

  //
  private listenRoute(): void {
    this.route.params
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params: Params) => {
        const id = params['id'];
        this.fetchPost(id);
        this.getPostComments(id);
      });
  }

  //
  private fetchPost(id: number): void {
    this.postsService
      .fetchPost(id)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((post: Post) => {
        this.post = post;
      });
  }

  //
  private getPostComments(id: number): void {
    this.postsService
      .fetchComments(id)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((comments: PostComment[]) => {
        this.comments = comments;
      });
  }

  //
  receivedComment(comment: PostComment): void {
    this.comments.push(comment);
  }

  //
  updatePost(): void {
    this.postsService
      .updatePost(this.post)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.isEditMode = false;
      });
  }

  goBack(): void {
    this.location.back();
  }

  //
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
