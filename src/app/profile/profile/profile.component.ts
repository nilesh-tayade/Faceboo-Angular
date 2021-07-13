import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';
import { UserService } from 'src/app/services/user.service';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { UpdateCoverComponent } from '../update-cover/update-cover.component';
import { ProfileUploadComponent } from '../profile-upload/profile-upload.component';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public userService:UserService, private dialog:MatDialog) { }
  id:number;

    ngOnInit(): void {
     this.id= this.userService.getLoggedInUser().id;
   this.getUser();
     
    }

getUser()
{
  this.userService.getUserById(this.id).subscribe(data=>{
    this.userService.user=data
    console.log(data);
    
  })
}


    logout(){
      this.userService.logoutUser();
    }

    open(){
      this.dialog.open(UpdateCoverComponent);
    }

    changProfile(){
      this.dialog.open(ProfileUploadComponent);
    }

}
