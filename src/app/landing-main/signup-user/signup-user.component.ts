import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {LandingServiceService} from '../landing-service.service'
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup-user',
  templateUrl: './signup-user.component.html',
  styleUrls: ['./signup-user.component.css']
})
export class SignupUserComponent implements OnInit {
  userSignup = {
    name: "",
    email: "",
    password: "",
    repeatpassword: "",
  }
 
  confirm:any = false
  constructor(private serv:LandingServiceService,private router:Router,private route:ActivatedRoute) { }
  
  ngOnInit(): void {
  }
 
  addUser() {
    console.log("data vannnee")
    if (this.userSignup.password != this.userSignup.repeatpassword) {
      this.confirm = true;
    } else if (this.userSignup.name && this.userSignup.email === "") {
       alert("Field cannot be empty")
    } 
    this.serv.userSignup(this.userSignup).subscribe((data) => {
      console.log(data, "Signup Created")
      if (data) {
        Swal.fire("Successfully Added", "success")
        .then(() => {
          this.router.navigate(['../login-user'], { relativeTo: this.route });
        })          }
      else {
        Swal.fire("Network Error", "Please do after sometime ", "error")
          .then(() => {
            this.router.navigate(['../signup'], { relativeTo: this.route });
          })

      }
    })
  }
}
