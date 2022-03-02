import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {LandingServiceService} from '../../landing-main/landing-service.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  UserList: any

  constructor(private serve: LandingServiceService, private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.serve.userList().subscribe((data) => {
      this.UserList = data;
    })
  }


  editUser(e: any) {
    localStorage.setItem("editUser", e._id.toString())
    this.router.navigate(["/MainPage/signup"])
  }
  deleteUser(e: any) {
    Swal.fire({
      title: `Are you sure to delete the course ${e.name}?`,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Yes, Delete it!",
      denyButtonText: "No, Cancel please!",
      showDenyButton: true,
      text: "You won't be able to revert this!",
      icon: 'warning',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        this.serve.deleteUser(e)
          .subscribe(
            response => {
              if (response) {
                Swal.fire("Successfully Deleted", "", "success")
                  .then(() => {
                    let currentUrl = this.router.url;
                    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                      this.router.navigate([currentUrl]);
                    });
                  })
              }
              else {
                Swal.fire("Network Error", "Please do after sometime ", "error")
                  .then(() => {
                    this.router.navigate(['/adminpage/users'], { relativeTo: this.route });
                  })
  
              }
            }
  
          )
  
      } else {
        Swal.fire("Cancelled", "Your course record is safe ", "error");
      }
  
    })
  }
}
