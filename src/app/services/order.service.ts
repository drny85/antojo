import { ShoppingCartService } from './shopping-cart.service';
import { Order } from './../models/order';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orderCollection: AngularFirestoreCollection<Order>;

  constructor(private db: AngularFirestore, private shoppingCartServ: ShoppingCartService) { }


 async placeOrder(order: Order) {

    let result = await this.db.collection('orders', ref => ref.orderBy('datePlaced'));
    this.shoppingCartServ.clearCart();
    return result.add(order)
    

    
  }
}
