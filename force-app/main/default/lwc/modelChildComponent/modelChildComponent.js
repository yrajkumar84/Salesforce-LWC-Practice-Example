import { api, LightningElement } from 'lwc';

export default class ModelChildComponent extends LightningElement {

   @api bodyText
    @api headerText
    closeHandler(){
        this.dispatchEvent(new CustomEvent('close'))
    }
}