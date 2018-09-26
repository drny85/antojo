import { Observable } from 'rxjs';
import { UsersService } from './../../services/users/users.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Component, OnInit } from '@angular/core';
import { LoginsService } from '../../services/logins/logins.service';
import { User } from '../../models/user';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { async } from '@angular/core/testing';
import { ShoppingCart } from '../../models/shoppingCart';


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
  cart$: Observable<ShoppingCart>;
  

  constructor(public auth: LoginsService, 
    private msg: ToastrService, 
    private route: Router,
    private shoppingCartService: ShoppingCartService,
    private userServ: UsersService) {
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
  async ngOnInit() {
     
    this.cart$ = (await this.shoppingCartService.getCart());

  }

  logout() {
    this.auth.logout();
    this.msg.info('You are now logged Out', 'Logged Out');
    this.guest = 'Guest User';
    
    this.route.navigate['/login'];
    
  }


}
