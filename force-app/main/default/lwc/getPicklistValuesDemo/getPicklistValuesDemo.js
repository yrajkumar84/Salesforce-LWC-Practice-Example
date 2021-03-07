import { LightningElement ,wire} from 'lwc';
import {getObjectInfo} from 'lightning/uiObjectInfoApi'
import {getPicklistValues} from 'lightning/uiObjectInfoApi'
import ACC_OBJ from '@salesforce/schema/Account'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
export default class GetPicklistValuesDemo extends LightningElement {

    picklistvalue
    @wire (getObjectInfo,{objectApiName:ACC_OBJ})
    objectInfo
    @wire (getPicklistValues ,{recordTypeId : '$objectInfo.data.defaultRecordTypeId',fieldApiName:INDUSTRY_FIELD})
    IndustryPicklistValues

    handleChange(event){
        this.picklistvalue=event.target.value;
    }
}