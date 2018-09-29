import { map } from 'rxjs/operators';
import { LoginsService } from './../services/logins/logins.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: LoginsService, private router: Router) { }

  canActivate(route, state: RouterStateSnapshot) {
 
    return this.auth.user$.pipe(map(user => {
      if (user) {
    
        return true;
      } 
      this.router.navigate(['/login'], {queryParams: { returnURL: state.url}});
      return false;

    }));
  }
}
