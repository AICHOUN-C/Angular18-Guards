import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {

  private userStatus: string;

  constructor(private userService: UserService) {};


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.userStatus = this.userService.getRole();

    if(this.userStatus === "ADMIN"){
      return true;
    } else {
      return false;
    }
  }

}
