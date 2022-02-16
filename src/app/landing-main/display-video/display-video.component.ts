import { Component, OnInit } from '@angular/core';
import {LandingServiceService} from '../landing-service.service'

@Component({
  selector: 'app-display-video',
  templateUrl: './display-video.component.html',
  styleUrls: ['./display-video.component.css']
})
export class DisplayVideoComponent implements OnInit {
 
  singleVideo:any
  constructor(private Serve:LandingServiceService) { }

  ngOnInit(): void {
    let videoView = localStorage.getItem("singleVid");
    this.Serve.getSingleVid(videoView).subscribe((data) => {
      this.singleVideo = data
    })
  }

}
