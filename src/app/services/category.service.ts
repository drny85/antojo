import { Addons } from './../models/addons';
import { Category } from './../models/category';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoriesColl: AngularFirestoreCollection<Category>;
  categoryDoc: AngularFirestoreDocument<Category>
  categories: Observable<Category[]>;
  addOnsColl: AngularFirestoreCollection<Addons>;
  addOnDoc: AngularFirestoreDocument<Addons>;
  addons: Observable<Addons>;


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

  addCategory(category: Category) {

    return this.db.collection<Category>(`categories`).doc(`${category.name}`).set(category);

  }

  deleteCategory(id: string) {
    return this.db.doc(`categories/${id}`).delete();
  }

}
