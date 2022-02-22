import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LandingServiceService} from '../../landing-main/landing-service.service'

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  videoData:any

  constructor(private serve:LandingServiceService,private router:Router) { }

  ngOnInit(): void {
    this.serve.videoView().subscribe((data) => {
      this.videoData = data
    })
  }

}
