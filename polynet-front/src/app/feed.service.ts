import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Story} from "./Story";
import {StoryC} from "./StoryC";
import {AuthService} from "./auth/auth.service";

@Injectable({
  providedIn: 'root'
})

export class FeedService {

  public stories: Array<Story>;

  constructor(private http: HttpClient) { }
  share(content:string,username:string){
    // @ts-ignore
    const story={
      content,
      username
    };
    //
    //const story= new StoryC(content,username);

    return this.http.post("http://localhost:8080/stories", story,{
      withCredentials: true,
      headers:{'Content-Type': 'application/json'}
    }).toPromise().then(()=>{
      //const story={content};
      this.stories.unshift(story);
    });
  }
 fetch():Promise<any>{
    return this.http.get<Story[]>("http://localhost:8080/stories").toPromise().then((response)=>{

     this.stories = response

   });
 }

}
