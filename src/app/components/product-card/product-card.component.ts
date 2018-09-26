import { ShoppingCart } from '../../models/shoppingCart';

import { ShoppingCartService } from './../../services/shopping-cart.service';
import { Product } from './../../models/product';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart: ShoppingCart;
  @Input('itemCount') itemCount: number;

  
  constructor(private shoppingCartServ: ShoppingCartService) { 
   
  }

  addToCart() {
    
    this.shoppingCartServ.addToCart(this.product);

  }

 async ngOnInit() {
    (await this.shoppingCartServ.getOneCart(this.product.id)).subscribe(item => 
      {
        if (item ) {
         this.itemCount = item.quantity;
        
        }
        else {
          return null;
        }
      });
    
  }

}




