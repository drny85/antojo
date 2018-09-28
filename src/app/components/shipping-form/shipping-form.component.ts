import { ToastrService } from 'ngx-toastr';
import { OrderService } from './../../services/order.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from './../../models/user';
import { ShoppingCart } from './../../models/shoppingCart';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { Order } from '../../models/order';
import { async } from '@angular/core/testing';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {

  @Input('cart') cart: ShoppingCart;
  userId: string;
  subscription: Subscription
  message: string = '';

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

  constructor(
    private userService: UsersService, 
    private router: Router, 
    private notification: ToastrService,
    private orderServ: OrderService) {




  }

  async ngOnInit() {

    let id = await localStorage.getItem('userId');
    if (id) {
      this.subscription = this.userService.getUser(id).subscribe(user => {this.user = user ; this.userId = user.id});
      // this.subscription =  (this.userService.user.subscribe(user => {
      //     this.userId = user.id;
      //     this.user = user;
      //    }));

    } else {
      return null
    }
  }
  async saveOrder(e) {
    let shipping = e.value;
    let order = new Order(this.userId, shipping, this.cart);
    let orderToSubmmit = {
      datePlaced: order.datePlaced,
      grandTotal: order.grandTotal,
      items: order.items,
      shipping: order.shipping,
      message: this.message,
      userId: order.userId,
      status: order.status

    }

    let result = await this.orderServ.placeOrder(orderToSubmmit);
    if (result) {
      this.notification.success(`Thank You ${order.shipping.name.toUpperCase()}!`, 'You order has been proccesed.');
    }
    this.router.navigate(['/order-success', result.id]);
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
