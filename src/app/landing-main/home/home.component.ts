import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
declare var $: any; 
import {LandingServiceService} from 'src/app/landing-main/landing-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isJqueryWorking:any
  videoData:any
   
  constructor(private UploadService:LandingServiceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  //   $(document).ready(() => {  
  //     this.isJqueryWorking = 'Jquery is working !!!';
  // });
    this.UploadService.videoView().subscribe((data: any) => {
      this.videoData  = data
       
    })
    
  }  
  singleVid(vidData: any) {
    localStorage.setItem("singleVid", vidData._id.toString());
    this.router.navigate(["../singlevideo"], { relativeTo: this.route });

  }

  }
