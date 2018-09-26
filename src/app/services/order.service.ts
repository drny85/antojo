import { ShoppingCartService } from './shopping-cart.service';
import { Order } from './../models/order';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orderCollection: AngularFirestoreCollection<Order>;
  orders: Observable<Order[]>;

  constructor(private db: AngularFirestore, private shoppingCartServ: ShoppingCartService) { }


 async placeOrder(order: Order) {

    let result = await this.db.collection('orders', ref => ref.orderBy('datePlaced'));
    this.shoppingCartServ.clearCart();
    return result.add(order)
    

    
  }

  getOrderByUser(id: string) {
    return this.db.collection<Order>('orders', ref => ref.where('userId', '==', id)).valueChanges();
  }


  getOrders() {
    this.orderCollection = this.db.collection('orders');
    return this.orderCollection;
  }


  getAllOrders() {
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

}
