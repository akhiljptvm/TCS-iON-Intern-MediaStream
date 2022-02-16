import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { CommentsComponent } from './comments/comments.component';
import { AddVideoComponent } from './add-video/add-video.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { VideoListComponent } from './video-list/video-list.component';
import { EditVideoComponent } from './edit-video/edit-video.component';
import { ViewVideoComponent } from './view-video/view-video.component';
import { RatingsComponent } from './ratings/ratings.component';
import { UsersListComponent } from './users-list/users-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { TagsListComponent } from './tags-list/tags-list.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AdminLoginComponent,
    ReviewsComponent,
    CommentsComponent,
    AddVideoComponent,
    AdminNavbarComponent,
    AdminFooterComponent,
    VideoListComponent,
    EditVideoComponent,
    ViewVideoComponent,
    RatingsComponent,
    UsersListComponent,
    EditUserComponent,
    TagsListComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule
  ]
})
export class AdminModule { }
