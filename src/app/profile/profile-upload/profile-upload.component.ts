import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-profile-upload',
  templateUrl: './profile-upload.component.html',
  styleUrls: ['./profile-upload.component.css']
})
export class ProfileUploadComponent implements OnInit {

  constructor(private http:HttpClient,private userService:UserService,private router:Router,private dialogRef:MatDialogRef<ProfileUploadComponent>) { }

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
  
    selectedFile: File;
    retrievedImage: any;
   
    imageName: any;
  
    //Gets called when the user selects an image
    public onFileChanged(event) {
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile);
      
    }
  
    onUpload() {
      console.log(this.selectedFile);
      
      const uploadImageData = new FormData();
      uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    
      //Make a call to the Spring Boot Application to save the image
      this.http.post('http://localhost:8080/users/uploadProfile/'+this.userService.user.id, uploadImageData, { observe: 'response' })
        .subscribe((response) => {
          if (response.status === 200) {
            Swal.fire('Success...', 'Profile Image Uploaded  Successfully!', 'success')
            this.router.navigate(['/facebook/profile']);
          } else {
            Swal.fire('Error...', 'Something Went Wrong !', 'error')
          }
        }
        );

        this.dialogRef.close();
    }

}
