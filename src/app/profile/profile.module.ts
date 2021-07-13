import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileUploadComponent } from './profile-upload/profile-upload.component';
import { ProfileComponent } from './profile/profile.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileTimelineComponent } from './profile-timeline/profile-timeline.component';
import { AboutComponent } from './about/about.component';
import { PhotosComponent } from './photos/photos.component';
import { AddPhotosComponent } from './add-photos/add-photos.component';
import { FriendsComponent } from './friends/friends.component';
import { UpdateCoverComponent } from './update-cover/update-cover.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    ProfileUploadComponent,
    ProfileComponent,
    ProfileTimelineComponent,
    AboutComponent,
    PhotosComponent,
    AddPhotosComponent,
    FriendsComponent,
    UpdateCoverComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  entryComponents:[UpdateCoverComponent,ProfileUploadComponent]
})
export class ProfileModule { }
