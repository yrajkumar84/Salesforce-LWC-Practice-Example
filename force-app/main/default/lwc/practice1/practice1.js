import {  LightningElement } from 'lwc';

export default class Practice1 extends LightningElement {

    name;

    updateName(event){

        //console.log(event.target.value)
        this.name=event.target.value;
    }
}
