import { async } from '@angular/core/testing';
import { map } from 'rxjs/operators';
import { ShoppingCart } from './../../models/shoppingCart';

import { ShoppingCartService } from './../../services/shopping-cart.service';
import { Product } from './../../models/product';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { AngularFirestoreDocument } from 'angularfire2/firestore';


interface Items {
  product: Product,
  quantity: number

}



@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit , OnDestroy {

  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart: ShoppingCart[];
  

  cart: ShoppingCart;
  subscription: Subscription;


  constructor(private shoppingCartServ: ShoppingCartService) { 
   
  }

  async ngOnInit() {
   this.subscription = (await  this.shoppingCartServ.getOneCart(this.product.id)).subscribe(cart => this.cart = cart);
  }

  addToCart() {
    
    this.shoppingCartServ.addToCart(this.product);

  }

  removeFromCart() {
    this.shoppingCartServ.removeFromCart(this.product).then(() => console.log("remove")).catch((err) => console.log(err));
  }

   getQuantity() {
    
    if(!this.shoppingCart) return 0;
    let item = this.cart;
    return item ? item.quantity : 0;

    }


    ngOnDestroy() {
       this.subscription.unsubscribe();
    }
    
  }








