import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Product } from '../../models/product';
import { ShoppingCart } from '../../models/shoppingCart';


@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {

  @Input('product') product: Product;
  @Input('shopping-cart') shoppingCart: ShoppingCart;
  @Input('itemCount') itemCount: number;

  

  constructor(private cartService: ShoppingCartService) { 
    
  }

  addToCart() {
    this.cartService.addToCart(this.product).then(res => console.log('ADDED')).catch(err => console.log(err));
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.product).then(() => console.log("Deleted")).catch(err => console.log(err));
  }


}

