import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username:String;
  password:String;
  error:boolean;
  constructor() { }

  ngOnInit() {
    this.error=false;
  }

  login(){

  }

}
