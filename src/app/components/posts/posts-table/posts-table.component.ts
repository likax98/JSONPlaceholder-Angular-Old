import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/core/services/posts.service';
import { UsersService } from 'src/app/core/services/users.service';
import { User } from 'src/app/models/user';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.scss'],
})
export class PostsTableComponent implements OnInit {
  //
  users$: Observable<User[]>;

  //
  posts: Post[] = [];

  //
  toggleBtn: boolean = false;

  //
  photos: any = [];

  //
  tableHeaders: string[] = ["post's user", 'title', 'body'];

  //
  private unsubscribe$ = new Subject();

  //
  constructor(
    public postsService: PostsService,
    public usersService: UsersService
  ) {}

  //
  ngOnInit(): void {
    this.fetchPosts();
    this.users$ = this.usersService.fetchUsers();
  }

  //
  private fetchPosts(): void {
    this.postsService
      .fetchPosts()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  //
  addedPost(post: Post): void {
    this.posts.unshift(post);
  }

  //
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
