import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../class/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  baseurl="http://localhost:8080/post/";
  
  getAllPost():Observable<Post[]>
  {
    return this.http.get<Post[]>(this.baseurl);
  }

  addPost(post:Post):Observable<Post>
  {
    return this.http.post<Post>(this.baseurl,post);
  }

  getAllPostByUser(id:number):Observable<Post[]>
  {
    return this.http.get<Post[]>(this.baseurl+"user/"+id);
  }

  deletePostById(id:number)
  {
    return this.http.delete(this.baseurl+id);
  }

  updatePostById(post:Post)
  {
    return this.http.put(this.baseurl+post.id,post);
  }


}
