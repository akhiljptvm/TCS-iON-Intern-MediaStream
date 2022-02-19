import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-user',
  templateUrl: './signup-user.component.html',
  styleUrls: ['./signup-user.component.css']
})
export class SignupUserComponent implements OnInit {


  usrsignup(){
    console.log("account created");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
