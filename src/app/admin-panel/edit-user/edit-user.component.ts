import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LandingServiceService } from '../../landing-main/landing-service.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  adminLog = {
    username: "",
    password: "",
    repeatPass: "",
    email: "",
    Rights:""
  }

  constructor(private Serv:LandingServiceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
   
  AddAdmin() {
    // if (this.adminLog.password !== this.adminLog.repeatPass) {
    //  alert
    // }
    this.Serv.adminSignup(this.adminLog).subscribe((data) => {
      console.log("admin added", data) 
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Successfully Added',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(["/adminpage"])
    })
  }
}
