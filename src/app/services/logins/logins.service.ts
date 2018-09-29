import { async } from '@angular/core/testing';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Injectable()
export class LoginsService {


  user$: Observable<firebase.User>
  constructor(private authServ: AngularFireAuth, private msg: ToastrService, private router: ActivatedRoute, private route: Router) {

    this.user$ = authServ.authState;
   }

  register(email: string, password: string) {
   return this.authServ.auth.createUserWithEmailAndPassword(email, password);
    
  }

  //return a promise of the logim state
  getState() {
    return this.authServ.authState.pipe(map(auth => auth));
  }

  //return a login promise
 async login(email: string, password: string) {
    let returnURL= this.router.snapshot.queryParamMap.get('returnURL') || '/';
   await this.authServ.auth.signInWithEmailAndPassword(email, password).then(res => localStorage.setItem('userId', res.user.uid));
    this.route.navigateByUrl(returnURL);
      
  }

  logout() {
    let userId = localStorage.getItem('userId');
    if (userId) localStorage.removeItem('userId');
    return this.authServ.auth.signOut();
    
  }
}
