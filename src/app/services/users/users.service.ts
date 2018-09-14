import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  userDoc: AngularFirestoreDocument<User>;
  user: Observable<User>;
  current: Observable<User>;

  constructor(private fb: AngularFirestore, private auth: AngularFireAuth) { 
     
    this.auth.authState.subscribe(user => {
      if(user) {
      this.current = this.fb.doc<User>(`users/${user.email}`).valueChanges();
      }
      return null;
    })
}

//get all users
getUsers() {
  this.usersCollection = this.fb.collection<User>('users', ref => ref.orderBy('name'));

  this.users = this.usersCollection.snapshotChanges().pipe(
    map(actions => actions.map(
      a => {
        const data = a.payload.doc.data() as User;
        data.id = a.payload.doc.id;
        return data;

      }
    ))
  );
  return this.users;
}

//add user
addUser(user: User, id: string) {
  this.usersCollection.doc(id).set(user);
}

deleteUser(id: string) {
  this.userDoc = this.fb.doc(`users/${id}`);
  this.userDoc.delete();
}

updateUser(user: User) {
  this.userDoc = this.fb.doc(`users/${user.id}`);
  this.userDoc.update(user);

}

getUser(id: string): Observable<User> {
  this.userDoc = this.fb.doc<User>(`users/${id}`);
  this.user = this.userDoc.snapshotChanges().pipe(map(action => {
    if (action.payload.exists === false) {
      return null;
    } else {
      const data = action.payload.data() as User;
      data.id = action.payload.id
      return data;
    }
  }))
  return this.user;
}

getUserByEmail(email: string) {
  return this.fb.doc(`users/${email}`);
}

}
