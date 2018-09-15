import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products$;

  constructor(private productServ: ProductService) {
    this.products$ = this.productServ.getProducts();
   }

  ngOnInit() {
  }

}
