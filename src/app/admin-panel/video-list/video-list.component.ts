import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LandingServiceService } from '../../landing-main/landing-service.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  videoData: any
  // videoData:any = {
  //   videoTitle: "",
  //   video: "",
  //   thumbnail: "",
  //   category:"",
  //   description: "",
  //   releaseYear: "",
  //   subtitle:"",
  //   quality: "",
  //   tags: "",
  //   genre:"",
  // }


  constructor(private serve:LandingServiceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.serve.videoView().subscribe((data) => {
      this.videoData = data
    })
  }

  viewVid(data: any) {
    localStorage.setItem("singleVideo", data._id.toString());
    this.router.navigate(["MainPage/singlevideo"], { relativeTo: this.route });
  }

  editVid(e: any) {
    localStorage.setItem("editVid", e._id.toString());
    this.router.navigate(['adminpage/edit-video'])
  }

  deleteVid(data: any) {
    Swal.fire({
      title: `Are you sure to delete the course ${data.videoTitle}?`,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Yes, Delete it!",
      denyButtonText: "No, Cancel please!",
      showDenyButton: true,
      text: "You won't be able to revert this!",
      icon: 'warning',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        this.serve.deleteVideo(data)
          .subscribe(
            response => {
              if (response) {
                Swal.fire("Successfully Deleted","","success")
                .then(()=>{
                  let currentUrl = this.router.url;
                  this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
                      this.router.navigate([currentUrl]);
                  });
                })
              }
              else {
                Swal.fire("Network Error", "Please do after sometime ", "error")
                .then(()=>{
                  this.router.navigate(['/adminpage/video-list'], { relativeTo: this.route });
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
