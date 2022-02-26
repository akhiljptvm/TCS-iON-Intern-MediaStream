import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LandingServiceService} from '../../landing-main/landing-service.service'

@Component({
  selector: 'app-view-video',
  templateUrl: './view-video.component.html',
  styleUrls: ['./view-video.component.css']
})
export class ViewVideoComponent implements OnInit {
    
  singleVideo:any

  constructor(private serv:LandingServiceService,private router:Router) { }

  ngOnInit(): void {
    let videoView = localStorage.getItem("singleVideo");
    this.serv.getSingleVid(videoView).subscribe((data) => {
      this.singleVideo = data
    })
  }

}
