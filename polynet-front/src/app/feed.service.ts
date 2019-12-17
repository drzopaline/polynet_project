import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  public stories: any=[];

  constructor(private http: HttpClient) { }
  share(content:string ){
    return this.http.post("http://localhost:8888/stories", content).toPromise().then(()=>{
      this.stories.push({content:content})
    });
  }
 fetch():Promise<any>{
    return this.http.get("http://localhost:8888/stories").toPromise().then((response)=>{

     this.stories = response
   });
 }

}
