import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private afs:AngularFirestore) { }
  loadData(){
    return this.afs.collection("categories").snapshotChanges().pipe(
      map(actions=>{
       return actions.map(action=>{
          let id = action.payload.doc.id;
          let data = action.payload.doc.data();
          return {id,data};
        })
      })
    )
  }
}
