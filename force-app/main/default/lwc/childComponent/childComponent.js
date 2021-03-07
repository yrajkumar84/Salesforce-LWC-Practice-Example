import { api, LightningElement } from 'lwc';

export default class ChildComponent extends LightningElement {

   @api message;
   @api className;
   @api userDetails;

   get showclassName(){
       return this.className ? `alert ${this.className}`:`alert`;
   }
}