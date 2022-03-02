import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { DisplayVideoComponent } from './display-video/display-video.component';
import { AddVideoComponent } from './add-video/add-video.component';
import { SignupUserComponent } from './signup-user/signup-user.component';
// import { VideoUploadComponent } from './video-upload/video-upload.component';

const routes: Routes = [
  {
    path: "home",
    component:HomeComponent
  },
  {
    path:"login-user",
    component:LoginUserComponent
  },
  {
    path: "signup",
    component:SignupUserComponent
  },
  {
    path: "",
    redirectTo: "login-user",
    pathMatch:"full"
  },
  {
    path:"video",
    component:DisplayVideoComponent
  },
  {
    path:"new-video",
    component:AddVideoComponent
  },
  {
    path: "singlevideo",
  component:DisplayVideoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingMainRoutingModule { }
