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

  //?-----userlogin-----
 
  // userLogin(user: any){
  //   return this.http.post(`${this.server_address}/user/userLogin`,user);
  // }
  
  userList(){
    return this.http.get<any>(`${this.server_address}/user/userList`);
  }

  deleteUser(item:any){
    return this.http.post(`${this.server_address}/`,item);
  }

  editUser(item: any) {
    console.log("item found at editadmin",item)
    return this.http.post(`${this.server_address}/update`,item)
  }

  //?-----userSignup----
  userSignup(item:any){
    console.log(item);
    return this.http.post(`${this.server_address}/user`,item);
  }

  //?-----adminlogin-----
  adminLogin(item:any){
    console.log(item);
    return this.http.post(`${this.server_address}/signup`,item);
  }

  //Review 

  
  reviewList(){
    return this.http.get<any>(`${this.server_address}/review`);
  }
  
  addReview(data:any) {
    return this.http.post<any>(`${this.server_address}/review/add` ,data)
  }
  
  deleteReview(item:any){
    return this.http.post(`${this.server_address}/review/delete`,item);
  }

  editReview(item: any) {
    console.log("item found at editadmin",item)
    return this.http.post(`${this.server_address}/review/update`,item)
  }


}
