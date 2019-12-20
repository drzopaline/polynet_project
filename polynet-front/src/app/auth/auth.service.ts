import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  connected=false;
  username:string;
  constructor(private httpClient: HttpClient,private router:Router) { }

  isConnected(){
    return this.connected;
  }

  getUsername(){
    return this.username;
  }

  logout(){
    this.connected=false;
    this.router.navigate(["/login"]);
  }

  login(username:string, password:string){
    this.username=username;
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/x-www-form-urlencoded');

    const body=new HttpParams()
      .set('username',username)
      .set('password', password);

    const  url='http://localhost:8080/login';
    return (this.httpClient.post(url, body, {headers,withCredentials:true}).toPromise().then(()=>{
      this.connected=true;
    }).catch(()=>{
      console.log("test");
      this.connected=false;
    }))
  }
}
