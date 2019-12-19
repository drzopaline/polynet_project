import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {StoryPublisherComponent} from "./story-publisher/story-publisher.component";
import {WallComponent} from "./wall/wall.component";
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes = [
  {path:'',component:WallComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
