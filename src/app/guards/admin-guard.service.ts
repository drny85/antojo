import { map, switchMap } from 'rxjs/operators';
import { UsersService } from './../services/users/users.service';
import { LoginsService } from './../services/logins/logins.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private userServ: UsersService, private auth: LoginsService) { }

  canActivate(): boolean {
    return false;
  }
    

}