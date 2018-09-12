import { UsersService } from './../../services/users/users.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Component, OnInit } from '@angular/core';
import { LoginsService } from '../../services/logins/logins.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  userEmail: string;
  loggedIn: boolean;
  user;
  guest = 'Guest User';

  constructor(public auth: LoginsService, private msg: ToastrService, private route: Router, private userServ: UsersService) {
   
  }
  ngOnInit() {
    this.auth.getState().subscribe(user => {
      
      if (user) {
        this.loggedIn = true;
        this.userServ.getUser(user.email).subscribe(res => this.user = res);
        this.userEmail = user.email;
        console.log(this.user);
       
      }else {
        this.loggedIn = false;
      }
    })
   
  }

  logout() {
    this.guest = 'Guest User';
    this.auth.logout();
    this.msg.info('You are now logged Out', 'Logged Out');
    
    this.route.navigate['/login'];
    
  }


}
