import { LightningElement,api } from 'lwc';
import USER_Id from  '@salesforce/user/Id';
import LEAD_OBJ from '@salesforce/schema/Lead'
export default class CurrentRecodAndObjInfo extends LightningElement {

    @api recordId;
    @api objectApiName;
    userId =USER_Id
  
}