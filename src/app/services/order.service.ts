import { Order } from './../models/order';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orderCollection: AngularFirestoreCollection<Order>;

  constructor(private db: AngularFirestore) { }


  placeOrder(order: Order) {

    this.orderCollection = this.db.collection('orders', ref => ref.orderBy('datePlaced'));

   return this.orderCollection.add(order);
  }
}
