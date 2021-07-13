import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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
