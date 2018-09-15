import { AngularFireAuth } from 'angularfire2/auth';
import { UsersService } from './services/users/users.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { LoginsService } from './services/logins/logins.service';
import { User } from './models/user';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  current;
 
  constructor(private auth: LoginsService, private router: Router) {
    auth.user$.subscribe(user => {
      if (user) {
        let returnURL = localStorage.getItem('returnURL');
        if(returnURL) {
        localStorage.removeItem('returnURL');
        router.navigateByUrl(returnURL);
        }
      }
    })

  
  }
}
