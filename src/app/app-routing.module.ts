import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { contentroutes } from './header/content-rout';
import { HomeComponent } from './header/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'facebook',component:HomeComponent,children:contentroutes}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
