import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LandingServiceService } from '../landing-service.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-display-video',
  templateUrl: './display-video.component.html',
  styleUrls: ['./display-video.component.css']
})
export class DisplayVideoComponent implements OnInit {
  
  comment = {
    name:"",
    review: "",
    rating:""
  }
  
  singleVideo:any
  constructor(private Serve:LandingServiceService,private router:Router) { }

  ngOnInit(): void {
    let videoView = localStorage.getItem("singleVid");
    this.Serve.getSingleVid(videoView).subscribe((data) => {
      this.singleVideo = data
    })
  }
  AddComment() {
    this.Serve.addReview(this.comment).subscribe((data) => {
      Swal.fire('✅Successfully Added')
      this.router.navigate(['/'])
    
    })
}

}
