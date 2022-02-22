import { Component, OnInit } from '@angular/core';
import {LandingServiceService} from '../../landing-main/landing-service.service'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  UserList:any

  constructor(private serve:LandingServiceService) { }

  ngOnInit(): void {
    this.serve.userList().subscribe((data) => {
      this.UserList = data;
    })
  }

}
