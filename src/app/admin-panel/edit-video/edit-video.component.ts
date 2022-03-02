import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {LandingServiceService} from '../../landing-main/landing-service.service'
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

export interface Tag {
  name: string;
}

@Component({
  selector: 'app-edit-video',
  templateUrl: './edit-video.component.html',
  styleUrls: ['./edit-video.component.css']
})
export class EditVideoComponent implements OnInit {

  editView:any
  videoUrl:any;
  videoSizeError: any;
  videoSuccess:any
      // tag ts
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags: Tag[] = [{name: 'video'}, {name: 'comedy'}, {name: 'add tag'}];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.tags.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(tag: Tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

        // end tags ts
 
  selectedFile: any;
  formData: any = {};
  fd = new FormData();

  url = '';

  uploadVideo:any = {
    videoTitle: "",
    video: "",
    thumbnail: "",
    category:"",
    description: "",
    releaseYear: "",
    subtitle:"",
    quality: "",
    tags: "",
    genre:"",
  }

  constructor(private landingServ:LandingServiceService,private route:Router, private routerAct:ActivatedRoute,private sanitizer:DomSanitizer) { }
   
  onSelectFile(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event:any) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }


  // validation

  onSubmit(Upload:any){
    console.log("video uploaded");
  }

  ngOnInit(): void {
    let editVidStorage = localStorage.getItem("editVid"); 
    this.landingServ.getSingleVid(editVidStorage).subscribe((data)=>{
      this.uploadVideo = JSON.parse(JSON.stringify(data));
      
    })

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

  readVideoUrl(event: any) {
    const files = event.target.files;
    if (files && files[0]) {
      this.videoUrl = this.sanitizer.bypassSecurityTrustUrl(
        URL.createObjectURL(files[0])
      );
    }
  }

  getDuration(e:any) {
    const duration = e.target.duration;
    // this.videoSizeError = duration >= 25;
    if (duration >= 25) {
      this.videoSuccess = false
       this.videoSizeError = true
    } else {
      this.videoSizeError = false
      this.videoSuccess = true
    }
  }
}
