import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private userservice:UserService,private router:Router) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  loginForm:FormGroup;
  
  createLoginForm()
  {
    this.loginForm=this.fb.group({
      mobile:['',Validators.required],
      password:['',Validators.required]

    })
  }

onSubmit()
{
console.log(this.loginForm.value);
this.doLogin();
}

reset()
{
  this.loginForm.reset();
}

doLogin()
{
this.userservice.loginUser(this.loginForm.value).subscribe(data=>{
  console.log(data);
  Swal.fire('Success...', 'You have Logged In Successfully!', 'success')
this.userservice.loginUserInApp(data);
this.router.navigate(['/facebook/home'])
},(error)=>{
console.log(error);
Swal.fire('Opps...', 'Username or password is Wrong', 'error')

})
}

}
