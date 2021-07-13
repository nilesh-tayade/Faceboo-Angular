import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddPhotosComponent } from './add-photos/add-photos.component';
import { FriendsComponent } from './friends/friends.component';
import { PhotosComponent } from './photos/photos.component';
import { ProfileTimelineComponent } from './profile-timeline/profile-timeline.component';
import { ProfileUploadComponent } from './profile-upload/profile-upload.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateCoverComponent } from './update-cover/update-cover.component';

const routes: Routes = [
{path:'',component:ProfileComponent,children:[
  {path:'profile-upload',component:ProfileUploadComponent},
  {path:'friends',component:FriendsComponent},
  {path:'photos',component:PhotosComponent},
   {path:'about',component:AboutComponent},
   {path:'profile-timeline',component:ProfileTimelineComponent},
   {path:'add-photos',component:AddPhotosComponent},
   {path:'update-cover',component:UpdateCoverComponent}

]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
