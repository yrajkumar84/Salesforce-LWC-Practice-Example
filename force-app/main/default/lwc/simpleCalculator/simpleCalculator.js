import { LightningElement,track } from 'lwc';

export default class SimpleCalculator extends LightningElement {

   @track currentresult;
   @track previousResult=[];
    @track showPreviouseResult=false;
    firstNumber;
    SecondNumber;

    numberChangedHandler(event){
        const inputboxName=event.target.name;
        if(inputboxName === 'firstNumber'){
            this.firstNumber=event.target.value;
        }else  if(inputboxName === 'SecondNumber'){
            this.SecondNumber=event.target.value;
        }
    }
    addHandler(){
        const firstN=parseInt(this.firstNumber);
        const secondN=parseInt(this.SecondNumber);
        //this.currentresult='Result of '+ firstN + ' + ' +  secondN +'= ' +(firstN+secondN);
        this.currentresult=`Result of ${firstN} + ${secondN} = ${firstN + secondN}`;
        this.previousResult.push(this.currentresult);
    }
    subHandler(){
        const firstN=parseInt(this.firstNumber);
        const secondN=parseInt(this.SecondNumber);
        //this.currentresult='Result of '+ firstN + ' + ' +  secondN +'= ' +(firstN+secondN);
        this.currentresult=`Result of ${firstN} - ${secondN} = ${firstN-secondN}`;
        this.previousResult.push(this.currentresult);
    }
    multiplyHandler(){
        const firstN=parseInt(this.firstNumber);
        const secondN=parseInt(this.SecondNumber);
        //this.currentresult='Result of '+ firstN + ' + ' +  secondN +'= ' +(firstN+secondN);
        this.currentresult=`Result of ${firstN} x ${secondN} = ${firstN * secondN}`;
        this.previousResult.push(this.currentresult);
    }
    divisionHandler(){
        const firstN=parseInt(this.firstNumber);
        const secondN=parseInt(this.SecondNumber);
        //this.currentresult='Result of '+ firstN + ' + ' +  secondN +'= ' +(firstN+secondN);
        this.currentresult=`Result of ${firstN} / ${secondN} = ${firstN / secondN}`;
        this.previousResult.push(this.currentresult);
    }
    showPreviouseResultToggle(event){
        this.showPreviouseResult=event.target.checked;
    }
 
}