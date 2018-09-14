import { Category } from './../models/category';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoriesColl: AngularFirestoreCollection<Category>;
  categories: Observable<Category[]>;


  constructor(private db: AngularFirestore) { }

  getCategories() {
    this.categoriesColl = this.db.collection<Category>('categories', ref => ref.orderBy('name'));
    this.categories = this.categoriesColl.snapshotChanges().pipe(map(
      actions => actions.map( a => {
        const data = a.payload.doc.data() as Category;
        data.id = a.payload.doc.id;
        return data;
      })
    ))
    return this.categories;
  }
}
