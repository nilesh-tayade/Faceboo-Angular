import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  constructor(private userService:UserService) { }
  id:number;
  user:User
    ngOnInit(): void {
     this.id= this.userService.getLoggedInUser().id;
   this.getUser();
     
    }

getUser()
{
  this.userService.getUserById(this.id).subscribe(data=>{
    this.user=data
    console.log(data);
    
  })
}



}
