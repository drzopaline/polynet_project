import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FeedService} from "../feed.service";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})

export class FeedComponent implements OnInit {
  stories:any=[];
  constructor(private feedService:FeedService) { }

  ngOnInit() {
    this.feedService.fetch().then(()=>{
      this.stories=this.feedService.stories;
    });

  }

}
