import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  error=false;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.error=false;
  }

  login(){
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/x-www-form-urlencoded');

    const body=new HttpParams()
      .set('username',this.username)
      .set('password', this.password);

    const  url='http://localhost:8080/login';
    this.httpClient.post(url, body, {headers}).toPromise().then(()=>{
      console.log("authenticated");
      this.error=false;
    }, () => {
      this.error=true
    })
  }


}
