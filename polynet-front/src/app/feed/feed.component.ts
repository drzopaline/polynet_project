import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FeedService} from "../feed.service";
import {Story} from "../Story";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})

export class FeedComponent implements OnInit {
  username:string;
  stories:Array<Story>;
  constructor(private feedService:FeedService,private authService:AuthService) { }


  ngOnInit() {
    this.feedService.fetch().then(()=>{
      this.username=this.authService.getUsername();
      this.stories=this.feedService.stories;
    });
  }
}
