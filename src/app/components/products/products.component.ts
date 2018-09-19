import { ShoppingCart } from './../../models/shoppingCart';
import { ShoppingCartService } from './../../services/shopping-cart.service';
import { Product } from './../../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { async } from '@angular/core/testing';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  category: string;
  filteredProducts: Product[] = [];
  cart: any;
  subscription: Subscription;
 

  constructor(
  
    private productServ: ProductService, 
    private activeRoute: ActivatedRoute,
    private shoppingCartServ: ShoppingCartService
    

    ) 
    
    { 
    
    this.productServ.getProducts().subscribe(products => {
      this.products = products;
      this.activeRoute.queryParamMap.subscribe(params => {
        this.category = params.get('category');
        this.filteredProducts = (this.category) ?
          this.products.filter(p => p.category === this.category) :
          this.products;
      })
     
    });
   
    
  }

  async ngOnInit() {
   
    this.subscription = (await this.shoppingCartServ.getCart()).valueChanges().subscribe(cart => this.cart = cart );
     

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
