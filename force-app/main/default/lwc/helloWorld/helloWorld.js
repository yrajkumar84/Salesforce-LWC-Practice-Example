import { LightningElement, track, wire } from 'lwc';

export default class HelloWorld extends LightningElement {

  @track greeting ='Raj';

  greetingChange(event){

    this.greeting=event.target.value;
  }

  @track Name ='name';
  namecha(event){
    this.Name=event.target.value;
  }
}