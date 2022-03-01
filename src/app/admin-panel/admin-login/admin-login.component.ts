import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LandingServiceService } from '../../landing-main/landing-service.service'
import Swal from 'sweetalert2';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminLog = {
    email: "",
    password:""
  }

  constructor(private router:Router,private Serv:LandingServiceService) { }

  onSubmit(){
    console.log("success");
  }

  ngOnInit(): void {

  }

  onformsubmit(f:any){
    console.log(f);
  }
  
  adminLogin() {
    this.Serv.adminLogin(this.adminLog).subscribe((data) => {
      if (data) {
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Successfully LoggedIn',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(["/adminpage"])
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
    })
    // this.router.navigate(["adminpage"])
  }

}
