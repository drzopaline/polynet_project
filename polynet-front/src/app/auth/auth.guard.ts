import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  CanLoad,
  Route, UrlSegment
} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: `root`
})
export class AuthGuard implements CanActivate {

  constructor(private authService:AuthService, private router:Router){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    // @ts-ignore
    if (this.authService.isConnected()) {
      console.log("connected");
      return true;
    } else {
      console.log(this.authService.isConnected())
      this.router.navigate(["/login"]);

      return false;
    }
  }
}

