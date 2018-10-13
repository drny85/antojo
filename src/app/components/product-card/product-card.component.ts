
import { ShoppingCart } from '../../models/shoppingCart';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ShoppingCartService } from './../../services/shopping-cart.service';
import { Product } from './../../models/product';
import { Component, Input, OnInit } from '@angular/core';
import { MatCheckboxChange, MatRadioChange, throwMatDialogContentAlreadyAttachedError } from '@angular/material';



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

  addons: string[] = [];
  flavors: string[] | string;
  flavorSelected: string;
  flavorsSelected= [];
  itemSelected = [];
  message = '';
  enableAddBtn: boolean = false;
  noFlavorsAdded: boolean = false;
 
  
  
  constructor(private shoppingCartServ: ShoppingCartService, private modalService: NgbModal)  { 
   
  }

 async addToCart() {

   await this.shoppingCartServ.addToCart(this.product);
  
  }

   onSelect(e: MatCheckboxChange) {
    if (e.checked) {
      //add item if not in array
      if (this.itemSelected.indexOf(<string>e.source.value) === -1) this.itemSelected.push(<string>e.source.value);
  
    } else {
      //revome item of already in.
      this.itemSelected.pop();
    
    }
   
  }

  onCheckedBox(e: MatRadioChange) {
    if (e.value) {
      this.enableAddBtn = true;
      this.flavorsSelected[0] = e.value;
    
    } else {
      this.enableAddBtn = false;
      
    }
    
  }

async updateCart(event?: HTMLButtonElement) {

  if (event) {
    if(this.flavorsSelected.length < 1) {
      alert('Please Make a Selection.');
      //this.flavorSelected = '';
      return
    }
  }
  
  this.product.addons = this.itemSelected || [];
  this.product.instruction = this.message;
  this.product.flavors = this.flavorsSelected;

  if(this.flavorsSelected) {

    console.log('Product:', this.product);
    console.log('Flavor:', this.flavorsSelected);
    
    await this.shoppingCartServ.addToCart(this.product);
    
    if(event) {
    
    event.click();
    
    }
    
  } 
    
 
  }

 async ngOnInit() {

  this.addons = this.product.addons;
  this.flavors = this.product.flavors;

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

async  openLg(content) {
  
    this.modalService.open(content, { centered: true });

  }

}




