import { LightningElement, track } from 'lwc';

export default class MyApplication1 extends LightningElement {

   @track Name='';
   @track  Address='';
   @track  phone='';
   @track  age='';
   @track  marritualStatus=false;
   @track citylist=['pune','mumbai','che','bang'];

    NameChange(event){
         this.Name=event.target.value;
         
    }
    NameChange1(event){
        this.Address=event.target.value;
        
   }
   NameChange2(event){
    this.phone=event.target.value;
    
    }
    NameChange3(event){
         this.age=event.target.value;
         
    }
    married(event){
          this.marritualStatus  =event.target.checked;
    }
}