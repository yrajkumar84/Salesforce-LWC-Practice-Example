import { LightningElement } from 'lwc';
import signInTemplate from './signInTemplete.html'
import signUpTemplate  from './signUpTemplete.html'
import defaultTemplate  from './rederMultipleDemo.html'
export default class RederMultipleDemo extends LightningElement {

    seletcted=null;

    render(){
        return this.seletcted === 'Sign Up' ? signUpTemplate:
            this.seletcted === 'Sign In' ? signInTemplate:
            defaultTemplate;
    }
    handleClick (event){
        this.seletcted=event.target.label;
    }
    submitHandler(event){
        if (event.target.label === 'Sign In') {
            alert("login ")
        }else if (event.target.label === 'Sign Up') {
            alert("sign up ")
        }else{

        }
    }
}