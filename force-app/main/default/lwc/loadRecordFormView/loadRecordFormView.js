import { api, LightningElement } from 'lwc';

export default class LoadRecordFormView extends LightningElement {

  @api  recordId
   @api objectApiName
    fields=['AccountId', 'Name', 'Title', 'Phone', 'Email'];
}