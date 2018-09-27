import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { UsersService } from './../../services/users/users.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class NavbarComponent implements OnInit, OnDestroy {


  userEmail: string;
  loggedIn: boolean;
  user;
  cart$: Observable<ShoppingCart>;
  subscription: Subscription;
  

  constructor(public auth: LoginsService, 
    private msg: ToastrService, 
    private route: Router,
    private shoppingCartService: ShoppingCartService,
    private userServ: UsersService) {

    
    this.subscription = this.auth.getState().subscribe(user => {
      
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  logout() {
    this.auth.logout();
    this.route.navigate(['/']);
    this.msg.info('You are now logged Out', 'Logged Out');
   
  }


}
