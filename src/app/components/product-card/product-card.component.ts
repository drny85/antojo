
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
      //add item if not in array
      if (this.itemSelected.indexOf(e.source.value) === -1) this.itemSelected.push(e.source.value);
      console.log('Addons:', this.itemSelected);
    } else {
      //revome item of already in.
      this.itemSelected.pop();
      console.log('Addons-2:', this.itemSelected);
    }
    
  }

   

async  updateCart(event: HTMLButtonElement) {

  this.product.addons = this.itemSelected;
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




