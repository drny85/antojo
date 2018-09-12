import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Injectable()
export class LoginsService {


  user$: Observable<firebase.User>
  constructor(private authServ: AngularFireAuth, private msg: ToastrService, private route: ActivatedRoute) {

    this.user$ = authServ.authState;
   }

  register(email: string, password: string) {
   return this.authServ.auth.createUserWithEmailAndPassword(email, password);
    
  }

  //return a promise of the logim state
  getState() {
    return this.authServ.authState;
  }

  //return a login promise
  login(email: string, password: string) {
    let returnURL= this.route.snapshot.queryParamMap.get('returnURL') || '/';
    localStorage.setItem('returnURL', returnURL);
    this.authServ.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.authServ.auth.signOut();
  }
}
