import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { VideoListComponent } from './video-list/video-list.component';
import { AddVideoComponent } from './add-video/add-video.component';
import { EditVideoComponent } from './edit-video/edit-video.component';
import { ViewVideoComponent } from './view-video/view-video.component';
import { RatingsComponent } from './ratings/ratings.component';
import { UsersListComponent } from './users-list/users-list.component';
import { CommentsComponent } from './comments/comments.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { TagsListComponent } from './tags-list/tags-list.component';



const routes: Routes = [
  {
    path: "",
  component:DashboardComponent
},
{
  path:"login-admin",
  component:AdminLoginComponent
},
{
  path:"video-list",
  component:VideoListComponent
},
{
  path:"new-video",
  component:AddVideoComponent
},
{
  path:"edit-video",
  component:EditVideoComponent
},
{
  path:"view-video",
  component:ViewVideoComponent
},
{
  path:"ratings",
  component:RatingsComponent
},
{
  path:"users",
  component:UsersListComponent
},
{
  path:"comments",
  component:CommentsComponent
},
{
  path:"edit-user",
  component:EditUserComponent
},
{
  path:"tags",
  component:TagsListComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
