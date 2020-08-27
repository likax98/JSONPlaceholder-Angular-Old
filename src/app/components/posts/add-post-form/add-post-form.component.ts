import { NgForm } from '@angular/forms';
import { PostsService } from 'src/app/core/services/posts.service';
import { Post } from 'src/app/models/post';
import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-add-post-form',
  templateUrl: './add-post-form.component.html',
  styleUrls: ['./add-post-form.component.scss']
})
export class AddPostFormComponent implements OnInit {
  public post: Post = new Post();
  @ViewChild('form') form: NgForm;
  @Output() newPost: EventEmitter<Post> = new EventEmitter<Post>();
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
  }

  public addPost(form) {
    // console.log(form.value);
    if (!form.valid)  {
      alert('Please enter form');
      return;
    }
    this.postsService.addPost(form.value).subscribe((post: Post) => {
      this.newPost.emit(form.value);
      this.form.reset();
    });
  }
}
