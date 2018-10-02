
import { ShoppingCart } from '../../models/shoppingCart';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ShoppingCartService } from './../../services/shopping-cart.service';
import { Product } from './../../models/product';
import { Component, Input, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';



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

  addons: object;
  selected = {};
  itemSelected = [];
  message = '';
  
  
  constructor(private shoppingCartServ: ShoppingCartService, private modalService: NgbModal)  { 
    
  }

  addToCart() {

    this.shoppingCartServ.addToCart(this.product);
    console.log(this.product);

  }

   onSelect(e: MatCheckboxChange) {
    if (e.checked) {
      this.selected[e.source.value] = e.source.value;
    } else {
      delete  this.selected[e.source.value];
    }
    
  }

   

async  updateCart(event: HTMLButtonElement) {

  this.product.addons = this.selected;
  this.product.instruction = this.message;
    
   await this.shoppingCartServ.addToCart(this.product);
   event.click();
  }

 async ngOnInit() {

   this.addons = await this.product.addons;

    (await this.shoppingCartServ.getOneCart(this.product.id)).subscribe(item => 
      {
        if (item ) {
         this.itemCount = item.quantity;
         console.log('ItemCoun:',item.quantity);
        
        }
        else {
          return null;
        }
      });
    
  }

async  openLg(content) {
  // await this.addToCart();
    this.modalService.open(content, { size: 'lg' });
  }

}




