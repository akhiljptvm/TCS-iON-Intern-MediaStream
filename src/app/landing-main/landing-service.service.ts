import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LandingServiceService {
  
  // server_address: string = '/api';
  server_address: string ='http://localhost:3000';
  constructor(private http: HttpClient) { }
  

    //?------------VideoList------------
    videoView(){
      return this.http.get<any>(`${this.server_address}/upload`);
    }
    //?--------------AddVideo -------------
    addVideo(data:any) {
      return this.http.post<any>(`${this.server_address}/upload/add` ,data)
    }
    //?--------------SingleVideo-------------
  getSingleVid(id: any) {
    return this.http.get<any>(`${this.server_address}/upload/vidupload/`+id)
  }
  
}
