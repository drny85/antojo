import { map } from 'rxjs/operators';
import { Product } from './../models/product';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsColl: AngularFirestoreCollection<Product>;
  productDoc: AngularFirestoreDocument<Product>;
  products: Observable<Product[]>;
  product: Observable<Product>;

  constructor(private db: AngularFirestore) { 
    
  }

  saveProduct(product: Product) {
    return this.db.collection('products').add(product);
  }

  getProducts() {
    this.productsColl = this.db.collection<Product>('products', ref => ref.orderBy('name'));
    this.products = this.productsColl.snapshotChanges().pipe(map(
      actions => actions.map( a => {
        const data = a.payload.doc.data() as Product;
        data.id = a.payload.doc.id;
        return data;
      })
    ))
    return this.products;
  }


   // get a player
   getProduct(id: string): Observable<Product> {
    this.productDoc = this.db.doc<Product>(`products/${id}`);
    this.product = this.productDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {

        return null;

      } else {
        const data = action.payload.data() as Product;
        data.id = action.payload.id;
        return data;
      }
    }))

    return this.product;
  }

  updateProduct(product: Product) {
    this.productDoc = this.db.doc(`products/${product.id}`);
    return this.productDoc.update(product);
  }

  deleteProduct(id: string) {
    this.productDoc = this.db.doc(`products/${id}`);
    return this.productDoc.delete();
  }



  }

