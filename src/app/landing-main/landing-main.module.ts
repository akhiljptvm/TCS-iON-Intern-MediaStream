import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { LandingMainRoutingModule } from './landing-main-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginUserComponent } from './login-user/login-user.component';
import { SignupUserComponent } from './signup-user/signup-user.component';
import { DisplayVideoComponent } from './display-video/display-video.component';
import { AddVideoComponent } from './add-video/add-video.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CategoryPipe } from './category.pipe';


import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';





@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginUserComponent,
    SignupUserComponent,
    DisplayVideoComponent,
    AddVideoComponent,
    CategoryPipe,
    
  ],
  imports: [
    CommonModule,
    LandingMainRoutingModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule
  ]
})
export class LandingMainModule { }
