import { Component } from '@angular/core';
import { SubscriptionService } from '../service/subscription.service';
import { NgForm } from '@angular/forms';
import { Sub } from '../models/sub';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent {

  isEmailPresent:boolean = false;
  isSubscribed:boolean =false;

  constructor(private subService:SubscriptionService){}

  onSubmit(form:NgForm){
    let subData:Sub={
      name :form.value.subName,
      email:form.value.subEmail
    }

    this.subService.checkEmail(subData.email).subscribe(val=>{
      if(val.empty){
        this.subService.saveSubscriber(subData);
        this.isSubscribed=true;
        this.isEmailPresent=false
      }
      else{
          this.isEmailPresent=true
          this.isSubscribed=false
      }
      
    })
    form.resetForm();
  }

}
