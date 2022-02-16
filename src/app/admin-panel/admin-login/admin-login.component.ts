import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor() { }

  onSubmit(){
    console.log("success");
  }

  ngOnInit(): void {
  }

  onformsubmit(f:any){
    console.log(f);
  }

}
