import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,private router:Router) { }

baseurl="http://localhost:8080/users/";

user:User;

getAlluser():Observable<User[]>
{
  return this.http.get<User[]>(this.baseurl);
}

getUserById(id:number):Observable<User>
{
  return this.http.get<User>(this.baseurl+id);
}

loginUser(loginrequest:any):Observable<User>
{
 return  this.http.post<User>(this.baseurl+"login",loginrequest)
}

RegisterUser(user:any):Observable<User>
{
 return  this.http.post<User>(this.baseurl,user)
}

loginUserInApp(user :User)
{
localStorage.setItem('user',JSON.stringify(user));
}

isLoggedIn():boolean
{
if(localStorage.getItem('user')!=null){
  return true
}
return false;
}

getLoggedInUser():User
{
let user:User = JSON.parse(localStorage.getItem('user'))
return user;
}

logoutUser(){
  localStorage.removeItem('user');
  this.router.navigate(['/login'])
}

}
