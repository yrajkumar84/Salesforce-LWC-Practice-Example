import { LightningElement } from 'lwc';
import pubSub from 'c/pubSub';

export default class PubsubChildOne extends LightningElement {
    
    
    buttonHandler(evt){
        this.eventPublisher(evt.target.innerText)
    }

    eventPublisher(data){
        pubSub.publish("accordingonTriggered",data)
    }
}