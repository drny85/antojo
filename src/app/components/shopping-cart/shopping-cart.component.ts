import { ShoppingCart } from './../../models/shoppingCart';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cart$;
  //totalPrice: number;


  constructor(private shoppingCartService: ShoppingCartService, private router: Router) { 
    
  }

   async ngOnInit() {

    this.cart$ = (await this.shoppingCartService.getCart());
   

  }
  clearCart() { 
    if (!confirm('Are you sure you want to clear the cart?')) return
    
    this.shoppingCartService.clearCart().then(() => console.log("Cart Deleted")).catch(err => console.log(err));

  }

  checkOut(cart: ShoppingCart) {
    let price = cart.totalPrice;
    let diff = (10  - cart.totalPrice).toFixed(2); 
    if(price < 10) {
      alert(`$10.00 Minimum for Delivery. Please just add $${diff} or more`);
      return
    } else {
      this.router.navigate(['/check-out']);
    }
  }

}


