import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private afs:AngularFirestore) { }

  saveSubscriber(data){
    this.afs.collection('subscriber').add(data).then(res=>{
      console.log("subscriber saved successfully")
    })
  }

  checkEmail(email){
    return this.afs.collection('subscriber',ref=>ref.where("email","==",email)).get();
  }
}
