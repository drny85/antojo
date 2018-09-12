import { ToastrService } from 'ngx-toastr';

import { Component, OnInit } from '@angular/core';
import { LoginsService } from '../../services/logins.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  userEmail: string;
  loggedIn: boolean;
  userName = 'Username'

  constructor(private auth: LoginsService, private msg: ToastrService) {
    this.auth.getState().subscribe(user => {
      
      if (user) {
        this.loggedIn = true;
        this.userEmail = user.email;
        this.userName = user.email;
      }else {
        this.loggedIn = false;
      }
    })
   }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
    this.msg.info('You are now logged Out', 'Logged Out');
  }

}
