import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import {increment} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private afs:AngularFirestore) { }

  loadPost(){
    return this.afs.collection('posts',ref=>ref.where("isFeatured","==",true).limit(4)).snapshotChanges().pipe(
       map(actions=>{
         return actions.map(action=>{
           const id=action.payload.doc.id;
           const data = action.payload.doc.data()
           return {id,data}
         })
       })
     )
   }

   loadLatesPost(){
    return this.afs.collection('posts',ref=>ref.orderBy('createdAt')).snapshotChanges().pipe(
       map(actions=>{
         return actions.map(action=>{
           const id=action.payload.doc.id;
           const data = action.payload.doc.data()
           return {id,data}
         })
       })
     )
   }

   loadSingleCategoryPost(categoryId){
    return this.afs.collection('posts',ref=>ref.where("category.categoryId","==",categoryId)).snapshotChanges().pipe(
       map(actions=>{
         return actions.map(action=>{
           const id=action.payload.doc.id;
           const data = action.payload.doc.data()
           return {id,data}
         })
       })
     )
   }

   loadSinglePost(postId){
    return this.afs.doc(`posts/${postId}`).valueChanges();
   }

   loadSimilarPost(catId){
    return this.afs.collection('posts',ref=>ref.where("category.categoryId","==",catId)).snapshotChanges().pipe(
      map(actions=>{
        return actions.map(action=>{
          const id=action.payload.doc.id;
          const data = action.payload.doc.data()
          return {id,data}
        })
      })
    )
   }

   countViews(postId){
    this.afs.doc(`posts/${postId}`).update({views:increment(1)}).then(res=>{
      console.log("views updated")
    })
   }
}


