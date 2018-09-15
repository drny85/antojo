import { Product } from './../../models/product';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './../../services/category.service';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  categories$;
  category: string;
  filteredProducts: Product[] = [];

  constructor(
    private productServ: ProductService, 
    private activeRoute: ActivatedRoute,
    private categoryServ: CategoryService) 
    
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
    this.categories$ = this.categoryServ.getCategories();
    
  }

  ngOnInit() {
   
  }

}
