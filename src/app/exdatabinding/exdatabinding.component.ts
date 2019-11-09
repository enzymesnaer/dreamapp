import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-exdatabinding',
  templateUrl: './exdatabinding.component.html',
  styleUrls: ['./exdatabinding.component.css']
})

export class ExdatabindingComponent implements OnInit {
  userDefinedVariableValue: string  = "define and assign string value to the above variable in your component.ts";
  name: string = "Angular";
  eventLogWhichBtn: any;
  eventLogCtrlChk: any;
  eventLogAltChk: any;
  months = ["January", "Feburary", "March", "April", "May", 
                  "June", "July", "August", "September",
                  "October", "November", "December"];
  isImportant: boolean = true;
  isNotImportant: boolean = false;
  myStyles = {
    'background-color': 'lime',
    'font-size': '20px',
    'font-weight': 'bold'
    }
    variableOne: boolean = true;
    variableTwo: boolean = true;
    
    setMyStyles() {
      let styles = {
        'background-color': this.variableOne ? 'red' : 'transparent',
        'font-weight': this.variableTwo ? 'bold' : 'normal'
      };
      return styles;
    }

  currentNumber = '0';
  firstOperand = null;
  operator = null;
  waitForSecondNumber = false;

  constructor() { }

  ngOnInit() {
    
  }

  onButtonClicked() {
      this.name = 'HelloWorld'
    }
    
    onButtonClicked2(evt: MouseEvent){
      this.eventLogWhichBtn = evt.which;
      this.eventLogCtrlChk=  evt.ctrlKey;
      this.eventLogAltChk= evt.altKey;
      }

      public getNumber(v: string){
        console.log(v);
        if(this.waitForSecondNumber)
        {
          this.currentNumber = v;
          this.waitForSecondNumber = false;
        }else{
          this.currentNumber === '0'? this.currentNumber = v: this.currentNumber += v;
        
        }
      }

      getDecimal(){
        if(!this.currentNumber.includes('.')){
            this.currentNumber += '.'; 
        }
      }
  
      private doCalculation(op , secondOp){
        switch (op){
              case '+':
              return this.firstOperand += secondOp; 
              case '-': 
              return this.firstOperand -= secondOp; 
              case '*': 
              return this.firstOperand *= secondOp; 
              case '/': 
              return this.firstOperand /= secondOp; 
              case '=':
              return secondOp;
        }
      }

      public getOperation(op: string){
        console.log(op);  

      if(this.firstOperand === null){
            this.firstOperand = Number(this.currentNumber);
      }else if(this.operator){
            const result = this.doCalculation(this.operator , Number(this.currentNumber))
            this.currentNumber = String(result);
            this.firstOperand = result;
      }
      this.operator = op;
      this.waitForSecondNumber = true;
      console.log(this.firstOperand);
    }

    public clear(){
      this.currentNumber = '0';
      this.firstOperand = null;
      this.operator = null;
      this.waitForSecondNumber = false;
    }
      
}
