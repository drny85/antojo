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

   async getCart(): Promise<AngularFirestoreCollection<ShoppingCart>> {
    let cartId= await this.getOrCreateCartId();
    return this.db.collection(`shopping-carts/${cartId}/items`);
    
   
  }

  async getOrCreateCartId(): Promise<string> {
    let cartId = localStorage.getItem('cartId');
    if (!cartId) {
      console.log('no cart');
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

   // remove from cart 
  async removeFromCart(product: Product) {
    //this.updateQuantity(product, -1);
    let cartId = await this.getOrCreateCartId();
    this.productDoc= this.getItem(cartId, product.id);
     this.productDoc.get().subscribe(doc => {
       if (doc.exists) {
         let q = doc.data() as Product;
        
         this.productDoc.update({quantity: q.quantity - 1 });
         if (q.quantity === 1) {this.productDoc.delete()}
         
       } 
     })
  
  
   }

   async getOneCart(id: string) {
        let cartId = await this.getOrCreateCartId();
        if(cartId) {
        this.cartDoc = this.db.doc(`shopping-carts/${cartId}/items/${id}`);
        this.cart = this.cartDoc.snapshotChanges().pipe(map(actions => {
          if(actions.payload.exists) {
          let data = actions.payload.data() as ShoppingCart;
          data.id = actions.payload.id; 
          return data;
          } else return null;
          
        }))
      
        return this.cart;
      }
   }

  //  // update add to cart or remove

  //  private async updateQuantity(product: Product, change: number) {
  //     let cartId = await this.getOrCreateCartId();
  //     this.productDoc= this.getItem(cartId, product.id);
  //     this.productDoc.get().subscribe(doc => {
  //       if (doc.exists) {

  //         let item = doc.data() as Product;
  //         console.log('Item:', item);
  //         this.productDoc.update({product: product, quantity: (item.quantity || 0) + change});

  //       }
        
  //     })
  
  //  }


  
}
