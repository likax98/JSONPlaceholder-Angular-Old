import { PostComment } from './../../models/comment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';

const URL: string = 'https://jsonplaceholder.typicode.com/posts';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private _http: HttpClient) {}

  fetchPosts(): Observable<Post[]> {
    //didad arapers cvlis mainc mainc
    const postHeaders = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    const postParams = new HttpParams({ fromString: '_order=desc&_sort=id' });

    return this._http.get<Post[]>(URL, {
      headers: postHeaders,
      params: postParams,
    });
  }

  fetchPost(id: number): Observable<Post> {
    console.log(id);
    return this._http.get<Post>(`${URL}/${id}`);
  }

  addPost(post: Post): Observable<Post> {
    return this._http.post<Post>(URL, post);
  }

  updatePost(post: Post): Observable<Post> {
    return this._http.put<Post>(`${URL}/${post.id}`, post);
  }

  // deletePost(id: number): Observable<any> {
  //   return this._http.delete(`${URL}/${id}`);
  // }

  fetchComments(id: number): Observable<PostComment[]> {
    return this._http.get<PostComment[]>(`${URL}/${id}/comments`);
  }
}
