import { LightningElement } from 'lwc';

export default class NotifyChildComponent extends LightningElement {

    showChildNotification=false
    showNotifyParentHandler(event){
        event.preventDefault();
        const selectEvent=new CustomEvent('show',{
            bubbles:true
        });
        this.dispatchEvent(selectEvent)
    }

    childHandler(){
        this.showChildNotification=true;
    }
}