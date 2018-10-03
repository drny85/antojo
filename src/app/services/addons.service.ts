import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Addons } from './../models/addons';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddonsService {

  addonsColl: AngularFirestoreCollection<Addons>;
  addons: Observable<Addons[]>;

  addon: AngularFirestoreDocument<Addons>;

  constructor(private db: AngularFirestore) { }

  getAddons() {
    this.addonsColl = this.db.collection<Addons>('addons');
    this.addons = this.addonsColl.snapshotChanges().pipe(map(
      actions => actions.map( a => {
        const data = a.payload.doc.data() as Addons;
        data.id = a.payload.doc.id;
        console.log(data);
        return data;
      })
    ))
    return this.addons;
  }

  
}
