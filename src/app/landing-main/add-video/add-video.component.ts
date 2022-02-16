import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LandingServiceService } from '../landing-service.service'
import Swal from 'sweetalert2';
// import * as $ from 'jquery';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {
 
  selectedFile: any;
  formData: any = {};
  fd = new FormData();

  url = '';
  uploadVideo:any = {
    videoTitle: "",
    video: "",
    thumbnail: "",
    description: "",
    releaseYear: "",
    subtitle:"",
    quality: "",
    tags: "",
    genre:"",
  }

  constructor(private landingServ:LandingServiceService,private route:Router, private routerAct:ActivatedRoute) { }
   
  onSelectFile(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event:any) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }

  ngOnInit(): void {

  }
  //

  //upload thumbnail
  thumbFile(event: any) {
    console.log("checkkkkk image")
    console.log("image function",event.target.files[0])
    this.selectedFile = <File>event.target.files[0];
    this.fd.append('thumbnail', this.selectedFile, this.selectedFile.name);
  }
  //upload Video
  videoFile(event: any) {
    console.log("checkkkkk")
    console.log("video function",event.target.files[0])
    this.selectedFile = <File>event.target.files[0];
    this.fd.append('video', this.selectedFile, this.selectedFile.name);
  }
  //upload Subtitle
  // subtitleFile(event: any) {
  //   this.selectedFile = <File>event.target.files[0];
  //   this.fd.append('subtitle', this.selectedFile, this.selectedFile.name);
  // }

  uploadVid() {
     
    for (const prop in this.uploadVideo)
    {
      this.fd.append(prop, this.uploadVideo[prop]);

    }

    this.landingServ.addVideo(this.fd).subscribe((data) => {
      console.log("Successfully Uploaded", data)
      this.route.navigate(["/"])

      if (data) {
        Swal.fire("Successfully Added", "success")
          .then(() => {
            this.route.navigate(['/'], { relativeTo: this.routerAct });
          })
      }
      else {
        Swal.fire("Network Error", "Please do after sometime ", "error")
          .then(() => {
            this.route.navigate(['/'], { relativeTo: this.routerAct });
          })

      }
    })
  }

}
