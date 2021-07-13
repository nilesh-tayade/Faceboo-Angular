import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-facebook-home',
  templateUrl: './facebook-home.component.html',
  styleUrls: ['./facebook-home.component.css']
})
export class FacebookHomeComponent implements OnInit {

  constructor(private userService:UserService) { }
user:User
  ngOnInit(): void {
   this.user= this.userService.getLoggedInUser();
  }

}
