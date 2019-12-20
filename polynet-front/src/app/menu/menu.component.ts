import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  username:string;
  connected=false;
  constructor(private authService:AuthService) { }

  ngOnInit() {
    if (this.authService.isConnected()) {
      this.connected=true;
      this.username=this.authService.getUsername();
    }
  }


  logout() {
    this.connected=false;
    this.authService.logout();
  }
}
