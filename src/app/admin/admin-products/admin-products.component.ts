import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  products: Product[];
  filtered: Product[];
  subscription: Subscription;
  // tableResource: DataTableResource<Product>;
  items= [];
  itemCount: number;


  constructor(private productServ: ProductService) {
    this.subscription = this.productServ.getProducts()
    .subscribe(products => {this.filtered = this.products = products;

    });

   }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  filter(query: string) {
    this.filtered = (query) ?
    this.products.filter(p => p.name.toLowerCase().includes(query.toLowerCase())) : 
    this.products;

  }

  // private initializeTable(products: Product[]) {

  //   this.tableResource = new DataTableResource(products);
    

  //   this.tableResource.count()
  //   .then(count => this.itemCount = count);
  // }

  // reloadItems(params) {
  //   if (!this.tableResource) return;
  //   this.tableResource.query(params)
  //   .then(items => this.items = items);

  // }

}
