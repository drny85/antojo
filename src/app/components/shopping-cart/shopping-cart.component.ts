import { ShoppingCart } from './../../models/shoppingCart';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cart$: ShoppingCart[];
  itemCount: number;
  totalPrice: number;

  constructor(private shoppingCartService: ShoppingCartService) { }

   async ngOnInit() {

    (await this.shoppingCartService.getCart()).valueChanges().subscribe(cart => this.cart$ = cart);
    let cart$ = (await this.shoppingCartService.getCart()).valueChanges();
    cart$.subscribe(cart => {
      this.itemCount = 0;  
      for (let count in cart) {
        // keep track of items in the cart
         this.itemCount +=  (cart[count].quantity);
         console.log('Cart: ',cart[count]);
      }
    
    })
  }

  getTotalPrice() {

  }

}
