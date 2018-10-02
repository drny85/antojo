import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Product } from '../models/product';
import {  map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../models/shoppingCart';
import { ShoppingCartItem } from '../models/shopping-cart-item';





@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  productDoc: AngularFirestoreDocument<any>;
  itemsColl: AngularFirestoreCollection<ShoppingCartItem>;
  items: Observable<ShoppingCart>;
  product: Observable<any>;
  cartDoc: AngularFirestoreDocument<ShoppingCartItem>;
  cart: Observable<ShoppingCartItem>;
 
  constructor(private db: AngularFirestore) { 
    
  }

  private createCart() {
    return  this.db.collection('shopping-carts').add({dateCreated: new Date().toLocaleString() });

  }

  private getItem(cartId: string, productId: string) {
    return this.db.doc(`shopping-carts/${cartId}/items/${productId}`);
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

  // get a cart 
   async getCart(): Promise<Observable<ShoppingCart>> {
    let cartId= await this.getOrCreateCartId();
    return this.db.collection<ShoppingCartItem>(`shopping-carts/${cartId}/items`).valueChanges().pipe(map(x =>  new ShoppingCart(x)))
    
  }

 // add to cart
  async addToCart(product: Product) {
    let cartId = await this.getOrCreateCartId();
    this.productDoc= this.getItem(cartId, product.id);
     this.productDoc.get().subscribe(doc => {
       if (doc.exists) {
         let q = doc.data() as ShoppingCartItem;
         this.productDoc.update({quantity: q.quantity + 1, addons: q.addons });
       } else {
         this.productDoc.set({
           id: product.id,
           name: product.name,
           price: product.price,
           picture: product.picture,
           addons: product.addons,
           instruction: product.instruction,
           quantity: 1
           });
       }
     })
  
    
  }

  async updateCart(product: Product) {
    let cartId = await this.getOrCreateCartId();
    this.productDoc= this.getItem(cartId, product.id);
    return this.productDoc.update(product);
  }

   // remove from cart 
  async removeFromCart(product: Product) {
   // this.updateItem(product, -1);
    let cartId = await this.getOrCreateCartId();
    this.productDoc= this.getItem(cartId, product.id);
     this.productDoc.get().subscribe(doc => {
       if (doc.exists) {
         let q = doc.data() as Product;
         let remainin = q.quantity;
         //if(remainin <= 1) this.productDoc.delete();
        
         this.productDoc.update({quantity: q.quantity - 1 });

         if (q.quantity === 1) {this.productDoc.delete()}
         
       } 
     })
  
  
   }

   async getOneCart(id: string) {
        let cartId = await this.getOrCreateCartId();
        if(cartId) {
        this.cartDoc = this.db.doc<ShoppingCartItem>(`shopping-carts/${cartId}/items/${id}`);
        this.cart = this.cartDoc.snapshotChanges().pipe(map(actions => {
          if(actions.payload.exists) {
          let data = actions.payload.data() as ShoppingCartItem;
         // data.id = actions.payload.id; 
          data.id = actions.payload.id
          return data;
          } else return null;
          
        }))
      
        return this.cart;
      }
   }


  async clearCart() { 
    let cartId = await this.getOrCreateCartId();
    let items = this.db.collection('shopping-carts/' + cartId + '/items');
    items.get().forEach(i => i.forEach(res => {
   
        return  this.db.doc(`shopping-carts/${cartId}/items/${res.id}`).delete();
     
    }))
      
   
    
  }


  }




  

