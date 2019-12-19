import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  connected=false;
  constructor(private httpClient: HttpClient,private router:Router) { }

  isConnected(){
    return this.connected;
  }

  logout(){
    this.connected=false;
    this.router.navigate(["/login"]);
  }

  login(username:string, password:string){

    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/x-www-form-urlencoded');

    const body=new HttpParams()
      .set('username',username)
      .set('password', password);

    const  url='http://localhost:8080/login';
    return (this.httpClient.post(url, body, {headers}).toPromise().then(()=>{
      this.connected=true;

    }).catch(()=>{
      this.connected=false;
    }))
  }
}
