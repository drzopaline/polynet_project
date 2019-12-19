import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {StoryPublisherComponent} from "./story-publisher/story-publisher.component";


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'stories',component:StoryPublisherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
