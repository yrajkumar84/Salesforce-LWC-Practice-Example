import { LightningElement ,wire} from 'lwc';
import {getObjectInfo } from 'lightning/uiObjectInfoApi'
import ACC__OBJ from '@salesforce/schema/Account'
export default class GetObjectInfoDemo extends LightningElement {
    defaultRecordTypeId
     @wire (getObjectInfo, {objectApiName: ACC__OBJ})

     objectInfo({data,error}){
        if (data) {
            this.defaultRecordTypeId =data.defaultRecordTypeId;
        } else if (error) {
            console.log(error);
        }
     }
}