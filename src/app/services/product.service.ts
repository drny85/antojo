import { Product } from './../models/product';
import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFirestore) { 
    
  }

  saveProduct(product: Product) {
    return this.db.collection('products').add(product);
  }

  getIProducts() {
    return this.db.collection('products');
  }
}
