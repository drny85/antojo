import { ShoppingCartService } from './../../services/shopping-cart.service';
import { Product } from './../../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription, Observable } from 'rxjs';
import { ShoppingCart } from '../../models/shoppingCart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  category: string;
  filteredProducts: Product[] = [];
  cart$: Observable<ShoppingCart>;
  subscription: Subscription;
 

  constructor(
  
    private productServ: ProductService, 
    private activeRoute: ActivatedRoute,
    private shoppingCartServ: ShoppingCartService
    

    ){ }

  async ngOnInit() {
   
    this.cart$ = (await this.shoppingCartServ.getCart());
    this.populateProducts();
     

  }

  private populateProducts() { 
   
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

}