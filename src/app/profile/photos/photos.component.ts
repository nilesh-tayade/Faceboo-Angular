import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  constructor(private userService:UserService) { }
  id:number;
  user:User
photos:string[]
    ngOnInit(): void {
     this.id= this.userService.getLoggedInUser().id;
   this.getUser();

    }

getUser()
{
  this.userService.getUserById(this.id).subscribe(data=>{
    this.user=data
    console.log(data);
    console.log("user is : "+this.user);
    this.photos=this.user.photos

  })
}

}
