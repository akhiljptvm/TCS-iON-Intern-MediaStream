import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { DisplayVideoComponent } from './display-video/display-video.component';
import { AddVideoComponent } from './add-video/add-video.component';
// import { VideoUploadComponent } from './video-upload/video-upload.component';

const routes: Routes = [
  {
    path: "",
    component:HomeComponent
  },
  {
    path:"login-user",
    component:LoginUserComponent
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
