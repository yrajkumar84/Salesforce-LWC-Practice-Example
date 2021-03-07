import { api, LightningElement, wire } from 'lwc';
import {getRecord,getFieldValue} from 'lightning/uiRecordApi'
import ACC_Obj from '@salesforce/schema/Account'
import ACC_Name from '@salesforce/schema/Account.Name'
import Owner_Email from '@salesforce/schema/Account.Owner.Email'
export default class DisplayRecordDataUsinggetRecord extends LightningElement {

    @api recordId
    nameField =ACC_Name;
    accountObject=ACC_Obj;

    @api accountObject
    @wire(getRecord,{recordId : '$recordId',fields:[Owner_Email]})
    record;
    get ownerField(){
        console.log(this.record.data)
        return this.record.data ? 
         getFieldValue(this.record.data,Owner_Email):'';
    }
}