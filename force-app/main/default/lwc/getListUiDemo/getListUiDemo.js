import { LightningElement , wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import ACC_Obj from '@salesforce/schema/Account' 
export default class GetListUiDemo extends LightningElement {

    records
    @wire (getListUi,{
        objectApiName: ACC_Obj,listViewApiName:'MyAccounts'
    })
    wiredlistView({error,data}){
        if (data) {
            this.records = data.records.records;
        }else if (error) {
            this.error = error;
        }
    }
    deleteHandler(){
        alert('delete this record')
    }
    EditHandler(){
        alert('edit this record')
    }
}