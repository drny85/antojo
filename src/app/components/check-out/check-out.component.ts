import { Shipping } from './../../models/shipping';
import { OrderService } from './../../services/order.service';
import { Product } from './../../models/product';
import { ShoppingCart } from './../../models/shoppingCart';
import { UsersService } from './../../services/users/users.service';
import { User } from './../../models/user';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Subscription } from 'rxjs';
import { Order } from '../../models/order';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy {

  user: User = {
    name: '',
    last_name: '',
    email: '',
    phone: '',
    isAdmin: false,
    address: {
      address: '',
      apt: '',
      city: '',
      state: '',
      zipcode: ''
    }
  };
  cart: ShoppingCart;
  cartSubscription : Subscription;
  userId: string;
  userSubscription: Subscription;

  constructor(private userService: UsersService, private shoppingCartServ: ShoppingCartService, private orderServ: OrderService) { 
   
   
   
  }

  async ngOnInit() {
   
    let cart$ = (await this.shoppingCartServ.getCart());
    this.cartSubscription = cart$.subscribe(cart => this.cart = cart);
    this.userSubscription= (await this.userService.user.subscribe(user => {
                                                                   this.userId = user.id;
                                                                   this.user = user;
                                                                  }));
    
  
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }


  saveOrder(e) {
    let shipping = e.value;
    let order = new Order(this.userId, shipping, this.cart );
    let orderToSubmmit = { datePlaced: order.datePlaced,
                           items: order.items,
                           shipping: order.shipping,
                           userId: order.userId

    }
    
    this.orderServ.placeOrder(orderToSubmmit).then(() => console.log('Order Submitted')).catch(err => console.log(err));
  }

}
