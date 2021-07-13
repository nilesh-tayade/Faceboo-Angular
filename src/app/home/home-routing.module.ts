import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacebookHomeComponent } from './facebook-home/facebook-home.component';

const routes: Routes = [
  {path:'',component:FacebookHomeComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
