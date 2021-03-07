import { LightningElement } from 'lwc';

export default class ModelParentComponent extends LightningElement {

    showModel=false;
    showHandler(){
        this.showModel=true;
    }
    modelCloseHandler(){
        this.showModel=false;
    }
}