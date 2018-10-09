import { Product } from './../../models/product';
import { Subscription } from 'rxjs';
import { ProductService } from './../../services/product.service';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';






@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig] 
})
export class HomeComponent implements OnInit, OnDestroy {

  showFiller = false;
  prodSub: Subscription;
  products: Product[] = [];

  constructor(private productServ: ProductService, private config: NgbCarouselConfig) {
    this.config.interval = 3000;
  }
  


  ngOnInit() {

  
  this.prodSub = this.productServ.getProducts().subscribe(products => {
    if(products) {
     this.products = products;
    }
     });
   
  }
  ngOnDestroy() {
    this.prodSub.unsubscribe();
  }
    


}
