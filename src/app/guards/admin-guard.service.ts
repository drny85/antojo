import { map, switchMap, take } from 'rxjs/operators';
import { UsersService } from './../services/users/users.service';
import { LoginsService } from './../services/logins/logins.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  admin: boolean;

  constructor(private userServ: UsersService, private auth: LoginsService, private loged: LoginsService, private route: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    return false;

}

}