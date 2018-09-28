import { ShoppingCartItem } from './../../../models/shopping-cart-item';
import { OrderService } from './../../../services/order.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Order } from '../../../models/order';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit, OnDestroy  {

  id: string
  orders: Order[] = [];
  product: any[] = [];
  subscription: Subscription;
  
  

  constructor(private activedRoute: ActivatedRoute, private location: Location, private orderServ: OrderService) { 

     
    

    }

   async ngOnInit() {
     let id = this.activedRoute.snapshot.params['id'];
     let userId = await localStorage.getItem('userId');
    this.subscription = this.orderServ.getOrderByUser(userId).subscribe(orders => {this.orders = orders.filter(res => res.items[0].product.id === id);
      console.log(this.orders);
      this.orders.forEach(res => res.items.forEach(order => {
        this.product.push({name: order.product.name,
                          picture: order.product.picture,
                          quantity: order.quantity,
                          price: order.product.price,
                          totalPrice: order.totalPrice
                        })
      }));
      console.log(this.product);
    
    });

     
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }

    goBack() {
     this.location.back();
    }


}