import { ActivatedRoute } from '@angular/router';
import { ShoppingCart } from './../models/shoppingCart';
import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Product } from '../models/product';
import {  map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  productDoc: AngularFirestoreDocument<any>;
  itemsColl: AngularFirestoreCollection<ShoppingCart>;
  items: Observable<ShoppingCart[]>;
  product: Observable<any>;
  cartDoc: AngularFirestoreDocument<ShoppingCart>;
  cart: Observable<ShoppingCart>;
 
  constructor(private db: AngularFirestore) { 
    
  }

  private createCart() {
    return  this.db.collection('shopping-carts').add({dateCreated: new Date().toLocaleString() });
  }

   async getCart() {
    let cartId= await this.getOrCreateCartId();
    return this.db.collection(`shopping-carts/${cartId}/items`);
    
   
  }

  private async getOrCreateCartId(): Promise<string> {
    let cartId = localStorage.getItem('cartId');
    if (!cartId) {
      let result = await this.createCart();
      localStorage.setItem('cartId', result.id);
      return result.id;
   
    }
    // if cartId in local storage, return it.
    return cartId;
  }

  private getItem(cartId: string, productId: string) {
    return this.db.doc(`shopping-carts/${cartId}/items/${productId}`);
  }

  // add to cart
   async addToCart(product: Product) {
     let cartId = await this.getOrCreateCartId();
     this.productDoc= this.getItem(cartId, product.id);
      this.productDoc.get().subscribe(doc => {
        if (doc.exists) {

          let q = doc.data() as Product;
          this.productDoc.update({quantity: q.quantity + 1 });

        } else {
          
          this.productDoc.set({product: product, quantity: 1});
        
        }
      })
   
     
   }

    getOneCart(id: string) {
      let cartId = localStorage.getItem('cartId');
      if(cartId) {
      this.cartDoc = this.db.doc(`shopping-carts/${cartId}/items/${id}`);
      this.cart = this.cartDoc.snapshotChanges().pipe(map(actions => {
        let data = actions.payload.data() as ShoppingCart;
        data.id = actions.payload.id;
        return data;
      }))
      return this.cart;
    }
   }
}
