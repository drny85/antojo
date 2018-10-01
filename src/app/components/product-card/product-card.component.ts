import { async } from '@angular/core/testing';
import { ShoppingCart } from '../../models/shoppingCart';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ShoppingCartService } from './../../services/shopping-cart.service';
import { Product } from './../../models/product';
import { Component, Input, OnInit, ViewChild } from '@angular/core';


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

  
  
  
  constructor(private shoppingCartServ: ShoppingCartService, private modalService: NgbModal)  { 
   
  }

  addToCart() {

    this.shoppingCartServ.addToCart(this.product);

  }

  updateCart(e: HTMLButtonElement) {
    this.product.addons = { items: ['cebollas', 'ajies', 'tomates']};
    console.log(this.product);
    
    this.shoppingCartServ.updateCart(this.product);
    console.log(e.click());
  }

 async ngOnInit() {
   
    (await this.shoppingCartServ.getOneCart(this.product.id)).subscribe(item => 
      {
        if (item ) {
         this.itemCount = item.quantity;
         console.log(item.quantity);
        
        }
        else {
          return null;
        }
      });
    
  }

async  openVerticallyCentered(content) {
   await this.addToCart();
    this.modalService.open(content, { centered: true });
  }

}




