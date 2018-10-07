import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Flavors } from './../models/flavors';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlavorsService {

  constructor(private db: AngularFirestore) { }

  flavorsColl: AngularFirestoreCollection<Flavors>;
  flavors: Observable<Flavors[]>;

  flavorDoc: AngularFirestoreDocument<Flavors>;
  flavor: Flavors;

  getFlavors() {
    this.flavorsColl = this.db.collection<Flavors>('flavors', ref => ref.orderBy('name'));
    this.flavors = this.flavorsColl.snapshotChanges().pipe(map(
      actions => actions.map( a => {
        const data = a.payload.doc.data() as Flavors;
        data.id = a.payload.doc.id;
        return data;
      })
    ))
    return this.flavors;
  }

  addFlavor(addon: Flavors) {
    this.flavorsColl = this.db.collection<Flavors>('flavors');
    return this.flavorsColl.add(addon);
  }

  deleteFlavor(id: string) {
    return this.db.doc<Flavors>(`flavors/${id}`).delete();
  }

}
