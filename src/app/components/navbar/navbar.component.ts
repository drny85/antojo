import { Observable } from 'rxjs';
import { UsersService } from './../../services/users/users.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Component, OnInit } from '@angular/core';
import { LoginsService } from '../../services/logins/logins.service';
import { User } from '../../models/user';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  userEmail: string;
  loggedIn: boolean;
  user;
  guest: string;
  

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
    this.auth.logout();
    this.msg.info('You are now logged Out', 'Logged Out');
    this.guest = 'Guest User';
    
    this.route.navigate['/login'];
    
  }


}
