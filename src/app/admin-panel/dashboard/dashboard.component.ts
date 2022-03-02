import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LandingServiceService} from '../../landing-main/landing-service.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   
  vidCount: any
  tagCount: any
  commentCount:any
  constructor(private serve:LandingServiceService,private router:Router) { }

  ngOnInit(): void {
    this.serve.videoView().subscribe((data) => {
      let count = data.length;
      this.vidCount = count;
      this.serve.reviewList().subscribe((res) => {
        this.commentCount = res.length
      })
    })
  }


}
