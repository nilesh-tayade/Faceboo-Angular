import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/class/post';
import { User } from 'src/app/class/user';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private userService:UserService, private postService:PostService) { }
  user:User
  posts:Post[]
    ngOnInit(): void {
     this.user= this.userService.getLoggedInUser();
     console.log(this.user);
     this.getAllPost();
    }

getAllPost()
{
  this.postService.getAllPost().subscribe(posts=>{
    this.posts=posts
    console.log(posts);
    
  })
}

}
