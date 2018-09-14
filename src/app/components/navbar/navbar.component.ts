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
  currentUser;

  constructor(public auth: LoginsService, private msg: ToastrService, private route: Router, private userServ: UsersService) {
    this.auth.getState().subscribe(user => {
      
      if (user) {
        this.loggedIn = true;
        this.userServ.getUser(user.uid).subscribe(res => this.user = res);
        this.userEmail = user.email;
        
      }else {
        this.loggedIn = false;
      }
    })
  }
  ngOnInit() {
  
   
  }

  logout() {
    this.guest = 'Guest User';
    this.auth.logout();
    this.msg.info('You are now logged Out', 'Logged Out');
    
    this.route.navigate['/login'];
    
  }


}
