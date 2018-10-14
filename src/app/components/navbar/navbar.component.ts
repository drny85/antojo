import { Order } from './../../models/order';
import { Observable, Subscription } from 'rxjs';
import { UsersService } from './../../services/users/users.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginsService } from '../../services/logins/logins.service';
import { User } from '../../models/user';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { ShoppingCart } from '../../models/shoppingCart';
import { OrderService } from '../../services/order.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {


  userEmail: string;
  loggedIn: boolean;
  user: User;
  cart$: Observable<ShoppingCart>;
  subscription: Subscription;
  orderSubscription: Subscription;
  orders: Order[] = [];
  newOrder: boolean = false;
  orderCount: number = 0;
 
  

  constructor(public auth: LoginsService, 
    private msg: ToastrService, 
    private route: Router,
    private orderServ: OrderService,
    private shoppingCartService: ShoppingCartService,
    private userServ: UsersService) {

    
    this.subscription = this.auth.getState().subscribe(user => {
      
      if (user) {
        this.loggedIn = true;
        this.userServ.getUser(user.uid).subscribe(res => {this.user = res;
          
          if (this.user.isAdmin && this.orderCount > 0)  {
          this.msg.info(`You have ${this.orderCount} new orders`, 'New Order');
          }

        });
        this.userEmail = user.email;
        
        
        
      }else {
        this.loggedIn = false;
      }
    })
  }
  async ngOnInit() {
     
    this.cart$ = (await this.shoppingCartService.getCart());
    this.orderSubscription = this.orderServ.getAllOrders().subscribe(order => {this.orders = order;
      let filtered =this.orders.filter(neworder => neworder.status === 'new');
     
      filtered.forEach(order => {
        if (order.status === 'new') {
          this.orderCount += 1;
        }
      });
      
    });

    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.orderSubscription.unsubscribe();

  }

  logout() {
    this.auth.logout();
    this.route.navigate(['/']);
    this.msg.info('You are now logged Out', 'Logged Out');
   
  }


}
