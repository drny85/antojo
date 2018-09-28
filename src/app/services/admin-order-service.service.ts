import { map } from 'rxjs/operators';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { Observable } from 'rxjs';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable({
  providedIn: 'root'
})
export class AdminOrderService {

  orderCollection: AngularFirestoreCollection<Order>;
  orders: Observable<Order[]>;
  orderDoc: AngularFirestoreDocument<Order>;
  order: Observable<Order>;

  constructor(private db: AngularFirestore, private shoppingCartServ: ShoppingCartService) { }


  getAdminOrders() {
    this.orderCollection = this.db.collection<Order>('orders', ref => ref.orderBy('datePlaced', 'desc'));
    this.orders = this.orderCollection.snapshotChanges().pipe(map(
      actions => actions.map( a => {
        const data = a.payload.doc.data() as Order;
        data.id = a.payload.doc.id;
        console.log(data);
        return data;
      })
    ))
    return this.orders;
  }

updateOrder(order: Order) {
  this.orderDoc = this.db.doc<Order>(`orders/${order.id}`);
  return this.orderDoc.update(order);
}

deleteOrder(id: string) {
  this.orderDoc = this.db.doc<Order>(`orders/${id}`);
  return this.orderDoc.delete();
}

// get just a particular referral
getOrder(id: string): Observable<Order> {
  this.orderDoc = this.db.doc<Order>(`orders/${id}`);
  this.order = this.orderDoc.snapshotChanges().pipe(map(action => {
    if (action.payload.exists === false) {

      return null;

    } else {
      const data = action.payload.data() as Order;
      data.id = action.payload.id;
      return data;
    }
  })
);
  return this.order;
}





  }




