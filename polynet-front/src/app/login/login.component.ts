import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  error=false;

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.username, this.password).then(()=>{

      this.error=false;
      this.router.navigate(["/"]);


      if (this.authService.isConnected()) {
        this.error = false;
      } else {
        this.error = true;
      }
    }).catch(() => {
    });
  }


}
