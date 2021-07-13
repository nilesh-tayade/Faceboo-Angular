import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-photos',
  templateUrl: './add-photos.component.html',
  styleUrls: ['./add-photos.component.css']
})
export class AddPhotosComponent implements OnInit {

  constructor(private http:HttpClient,private userService:UserService,private router:Router) { }

  user:User;
   
     ngOnInit(): void {
       this.user= this.userService.getLoggedInUser();
 
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
       this.http.post('http://localhost:8080/users/uploadPhotos/'+this.user.id, uploadImageData, { observe: 'response' })
         .subscribe((response) => {
           if (response.status === 200) {
             Swal.fire('Success...', 'Photos uploaded to gallary  Successfully!', 'success')
             this.router.navigate(['/facebook/profile/photos']);
           } else {
             Swal.fire('Error...', 'Something Went Wrong !', 'error')
           }
         }
         );
     }

}
