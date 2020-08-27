import { NgForm } from '@angular/forms';
import { PostComment } from './../../../models/comment';
import { PostsService } from './../../../core/services/posts.service';

import { Component, OnInit, OnDestroy, ViewChild, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from 'src/app/models/post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit, OnDestroy {
  public post: Post = new Post();
  public comments: PostComment[] = [];
  public isEditMode: boolean = false;

  @ViewChild('form') form: NgForm;
  @Output() editedPost: EventEmitter<Post> = new EventEmitter<Post>();

  private postSubscription: Subscription;
  private commentSubscription: Subscription;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private location: Location,

  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.fetchPost(id);
      this.getPostComments(id);
    });
    
  }

  public fetchPost(id: number): void {
    this.postSubscription = this.postsService
      .fetchPost(id)
      .subscribe((post: Post) => {
        this.post = post;
      });
  }

  public getPostComments(id: number): void {
    this.commentSubscription = this.postsService
      .fetchComments(id)
      .subscribe((comments: PostComment[]) => {
        this.comments = comments;
      });
  }

  public receivedComment(comment: PostComment): void {
    this.comments.push(comment);
  }

  public updatePost(post: Post): void{
    this.postsService.updatePost(this.post).subscribe((post) => {
      this.isEditMode = false;
    });
    
  }


  public goBack(): void {
    this.location.back();
  }



  ngOnDestroy(): void {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
    if (this.commentSubscription) {
      this.commentSubscription.unsubscribe();
    }
  }
}
