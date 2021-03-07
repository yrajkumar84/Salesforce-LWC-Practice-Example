import { LightningElement, wire } from 'lwc';
import {getRecordCreateDefaults} from 'lightning/uiRecordApi'
import Acc_obj from '@salesforce/schema/Account'

export default class GetRecordCreateDefaultsDemo extends LightningElement {

    tableHearder=[]
    tableBody=[]

    @wire (getRecordCreateDefaults,{objectApiName: Acc_obj})
    wireRecordDefaults({data ,error}){
        if (data) {
            console.log(JSON.stringify(data))
            const {fields} =data.objectInfos.Account
            this.tableHearder=['Api Name','Data Type','Label','Length','Is Required']//Object.keys(fields)
            this.tableBody=Object.keys(fields).map(item=>{
                let field=fields[item]
                const {apiName,dataType,label ,length,required}=field
                return {apiName,dataType,label ,length,required}
            })
            console.log(JSON.stringify(this.tableBody))
            console.log(JSON.stringify(this.tableHearder))
        }
        if (error) {
                console.log(error)
        }
    }
}