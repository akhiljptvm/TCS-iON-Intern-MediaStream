import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  userLogin = {
    email: '',
    password: ''
  }

  constructor(private auth:AuthService,private router:Router,private route:ActivatedRoute) { }

  userlogin(){
    console.log("login successfully")
  }

  ngOnInit() {
  }


  loginUser() {
    console.log("happend")
    if(this.userLogin.email==""&&this.userLogin.password=="") {
      Swal.fire(
        'Warning!!',
        'Please enter email & password!',
        'error')
    }
    console.log("data reached first")
    this.auth.loginUser(this.userLogin)
    .subscribe(
      response => {
        console.log("data reached ")
        // let result = response;
        if (response) {
          // localStorage.setItem('token', response.token)
        //   localStorage.setItem('add', response.add)
        //   localStorage.setItem('edit', response.edit)
        //   localStorage.setItem('delete', response.delete)
        //   localStorage.setItem('superadmin', response.superadmin)
        //   localStorage.setItem('user', response.superadmin)

          // this.auth.role = response.role
          // localStorage.setItem('user1', JSON.stringify(response.user))
          // alert("Admin Logged Successfully")
          Swal.fire("Successfully LoggedIn", "success")
          // console.log("SuperAdmin logged", response.token)
          // console.log("admin logged",response.role)
        
          this.router.navigate(['/']);
          
        } else {
          Swal.fire(
            'Warning!!',
            'admin not found!',
            'error')
            .then (
              refresh =>{
                let currentUrl = this.router.url;
                this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
                    this.router.navigate([currentUrl]);
                });    
             }) 
        }
        // if (this.userLogin.email != response.user && this.userLogin.password != response.user) {
          
        //   Swal.fire(
        //     'Warning!!',
        //     'admin not found!',
        //     'error')
        //     .then (
        //       refresh =>{
        //         let currentUrl = this.router.url;
        //         this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        //             this.router.navigate([currentUrl]);
        //         });    
        //     }) 
        // }
        
      })

  
  }
}
