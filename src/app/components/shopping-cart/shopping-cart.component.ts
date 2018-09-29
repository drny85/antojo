import { ShoppingCart } from './../../models/shoppingCart';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cart$;
  //totalPrice: number;


  constructor(private shoppingCartService: ShoppingCartService) { 
    
  }

   async ngOnInit() {

    this.cart$ = (await this.shoppingCartService.getCart());
   

  }
  clearCart() { 
    if (!confirm('Are you sure you want to clear the cart?')) return
    
    this.shoppingCartService.clearCart().then(() => console.log("Cart Deleted")).catch(err => console.log(err));

  }

}


