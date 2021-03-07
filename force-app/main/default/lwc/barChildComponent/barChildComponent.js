import { api, LightningElement } from 'lwc';

export default class BarChildComponent extends LightningElement {
    className='greenBar';

    @api changeBarColor(){
        this.className='redBar';
    }

}