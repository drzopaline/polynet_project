import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FeedService} from "../feed.service";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-story-publisher',
  templateUrl: './story-publisher.component.html',
  styleUrls: ['./story-publisher.component.scss']
})
export class StoryPublisherComponent implements OnInit {

  content:string;
  username:string;
  constructor(private feedService:FeedService,private authService:AuthService) { }

  ngOnInit() {
    this.username=this.authService.getUsername();
  }

  share(){

    this.feedService.share(this.content,this.username);
  }


}
