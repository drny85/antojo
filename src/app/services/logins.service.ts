import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';


@Injectable()
export class LoginsService {

  constructor(private authServ: AngularFireAuth, private msg: ToastrService ) { }

  register(email: string, password: string) {
   return this.authServ.auth.createUserWithEmailAndPassword(email, password);
    
  }

  getState() {
    return this.authServ.authState.pipe(map(auth => auth));
  }

  login(email: string, password: string) {
    return this.authServ.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.authServ.auth.signOut();
  }
}
