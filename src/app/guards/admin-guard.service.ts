import { map, switchMap, take, tap } from 'rxjs/operators';
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

  constructor(private userServ: UsersService, private auth: LoginsService, private route: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.userServ.current.pipe(map(admin => admin.isAdmin));
  }

}