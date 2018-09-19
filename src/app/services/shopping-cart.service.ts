import { ActivatedRoute } from '@angular/router';
import { ShoppingCart } from './../models/shoppingCart';
import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Product } from '../models/product';
import {  map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ShoppingCartInterface } from '../models/shopping-cart';


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

   async getCart(): Promise<AngularFirestoreCollection<ShoppingCart>> {
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
    this.updateQuantity(product, 1);
     
   }

   // remove from cart 
   async removeFromCart(product: Product) {
    this.updateQuantity(product, -1);
  
   }

   async getOneCart(id: string) {
        let cartId = await this.getOrCreateCartId();
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

   // update add to cart or remove

   private async updateQuantity(product: Product, change: number) {
      let cartId = await this.getOrCreateCartId();
      this.productDoc= this.getItem(cartId, product.id);
      this.productDoc.get().subscribe(doc => {
        if (doc.exists) {

          let item = doc.data() as Product;
          this.productDoc.update({product: product, quantity: (item.quantity || 0) + change});

        }
      })
  
   }
}
