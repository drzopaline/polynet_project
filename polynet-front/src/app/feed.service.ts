import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Story} from "./Story";

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  public stories: Array<Story>;


  constructor(private http: HttpClient) { }
  share(content:string ){
    return this.http.post("http://localhost:8080/stories", content).toPromise().then(()=>{
      const story={content};
      this.stories.unshift(story)
    });
  }
 fetch():Promise<any>{
    return this.http.get<Story[]>("http://localhost:8080/stories").toPromise().then((response)=>{

     this.stories = response

   });
 }

}
