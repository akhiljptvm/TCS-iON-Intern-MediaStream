import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  add: any
  edit: any
  delete: any
  superadmin: any
  users:any

  server_address :string ='http://localhost:3000';
  constructor(private http: HttpClient) { 

    this.superadmin=localStorage.getItem("superadmin");
    this.add=localStorage.getItem("add");
    this.edit=localStorage.getItem("edit");
    this.delete = localStorage.getItem("delete");
    this.users=localStorage.getItem("user");

  }
   
  loginUser(user: any) {
    // return this.http.post<any>(`${this.server_address}/login`, user)
    return this.http.post(`${this.server_address}/user/userLogin`,user);
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }
}
