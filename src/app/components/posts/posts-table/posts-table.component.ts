import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/core/services/posts.service';
import { UsersService } from 'src/app/core/services/users.service';
import { User } from 'src/app/models/user';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.scss'],
})
export class PostsTableComponent implements OnInit {
  public users$: Observable<User[]>;
  public posts: Post[] = [];
  toggleBtn: boolean = false;
  public photos = [];
  public tableHeaders: string[] = ["post's user", 'title', 'body'];
  constructor(
    public postsService: PostsService,
    public usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.fetchPosts();

    this.users$ = this.usersService.fetchUsers();
  }

  fetchPosts() {
    this.postsService.fetchPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  public addedPost(post: Post) {
    console.log(post)
    this.posts.unshift(post);
  }
}
