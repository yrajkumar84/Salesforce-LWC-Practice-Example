import { LightningElement, track } from 'lwc';

export default class ConditionalRendering extends LightningElement {

   @track displaydiv=false;

    showDivHandler(event){
        this.displaydiv=event.target.checked;
    }
}