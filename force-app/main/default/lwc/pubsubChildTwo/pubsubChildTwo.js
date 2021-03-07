import { LightningElement, track } from 'lwc';
import pubSub from 'c/pubSub';
export default class PubsubChildTwo extends LightningElement {

  @track  accordionList = [
        {
            id: 1,
            name: 'Success',
            selected: false,
            className: 'accordion success'
        },
        {
            id: 2,
            name: 'Info',
            selected: false,
            className: 'accordion info'
        },
        {
            id: 3,
            name: 'Warning',
            selected: false,
            className: 'accordion warning'
        },
        {
            id: 4,
            name: 'Danger',
            selected: false,
            className: 'accordion danger'
        }
    ];
    connectedCallback(){
        this.callsubscriber();
    }

    callsubscriber(){
        pubSub.subscribe('accordingonTriggered',this.subscriberCallback)
    }
    subscriberCallback=(event)=>{
      let updatedlist=this.accordionList.map(item=>{
          return item.name === event? {...item,
        selected: true }:{...item,selected: false}
      })
      this.accordionList=[...updatedlist]
    }
}