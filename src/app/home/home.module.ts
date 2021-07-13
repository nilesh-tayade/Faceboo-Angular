import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FacebookHomeComponent } from './facebook-home/facebook-home.component';
import { StoriesComponent } from './stories/stories.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PostsComponent } from './posts/posts.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { AddPostComponent } from './add-post/add-post.component';


@NgModule({
  declarations: [
    FacebookHomeComponent,
    StoriesComponent,
    TimelineComponent,
    PostsComponent,
    AddPostComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
  ]
})
export class HomeModule { }
