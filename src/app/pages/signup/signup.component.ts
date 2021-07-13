import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb:FormBuilder,private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.createSignUpForm();
    this.getAllUser();
  }

  signUpForm:FormGroup


  createSignUpForm()
  {
this.signUpForm=this.fb.group({
  firstname:['',Validators.required],
  lastname:['',Validators.required],
  email:['',Validators.required],
  mobile:['',Validators.required],
  password:['',Validators.required],
  gender:['',Validators.required],

  bio:['',Validators.required],
  dob:['',Validators.required]


})
  }

  onSubmit()
  {
console.log(this.signUpForm.value);

this.RegisterUser();
  }

getAllUser()
{
  this.userService.getAlluser().subscribe(data=>{
    console.log(data);
    
  })
}
  RegisterUser()
  {
    this.userService.RegisterUser(this.signUpForm.value).subscribe(data=>{
      console.log(data);
      Swal.fire('Success...', 'User Registered Successfully!', 'success');
      this.router.navigate(['/login'])
    },(error)=>{
      console.log(error);
      Swal.fire('Oops...', 'Something went wrong!', 'error');

    })
  }
  
}
