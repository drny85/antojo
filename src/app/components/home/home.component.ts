import { map } from 'rxjs/operators';

import { LoginsService } from './../../services/logins/logins.service';
import { UsersService } from './../../services/users/users.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tuser;

  constructor(private user: LoginsService, private auth: UsersService) { }
   

  ngOnInit() {

    console.log(this.tuser);
  }

  get() {
    this.user.user$.pipe(map(u => {
      this.tuser = this.auth.getUser(u.email);
    }))
  }

}
