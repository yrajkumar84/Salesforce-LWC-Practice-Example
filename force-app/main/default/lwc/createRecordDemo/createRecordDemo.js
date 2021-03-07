import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import ACC_OBJ from '@salesforce/schema/Account'

import ACC_NAME from '@salesforce/schema/Account.Name'
import Acc_PHONE from '@salesforce/schema/Account.Phone'
import ACC_INDUSTRY from '@salesforce/schema/Account.Industry'
import ACC_TYPE from '@salesforce/schema/Account.Type'
export default class CreateRecordDemo extends LightningElement {

    formFields={
        Name :'',
        Phone:'',
        Type:'',
        Industry:''
    }
    changeHandler(event){
        const {value,name}=event.target
        this.formFields={...this.formFields,[name]:value}
    }
    handleSave(){
        const fields={}
        fields[ACC_NAME.fieldApiName]=this.formFields.Name
        fields[Acc_PHONE.fieldApiName]=this.formFields.Phone
        fields[ACC_TYPE.fieldApiName]=this.formFields.Type
        fields[ACC_INDUSTRY.fieldApiName]=this.formFields.Industry
      
        let recordInput={apiName :ACC_OBJ.objectApiName,fields}

        createRecord(recordInput).then(result=>{
            this.formFields={}
            console.log('Account created Id ',JSON.stringify(result.id))
        }).catch(error=>{
            console.error(error)
        })
    }
}