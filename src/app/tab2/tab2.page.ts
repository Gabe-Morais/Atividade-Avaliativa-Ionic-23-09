import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  operation = '';
  result = '';
  hasOperator = false;

  constructor() { }


  addValue(valor: any) {
    if (!this.operation && this.valueIsOperator(valor)) {
      this.operation = '';
    } else if (this.valueIsOperator(valor) && (this.hasOperator == false)) {
      this.hasOperator = true;
      this.operation += valor;
    } else if (this.valueIsOperator(valor) && (this.hasOperator)) {
      return
    } else if (valor != this.operation) {
      this.operation += valor;
      this.hasOperator = false;
    }

  }

  getResult(){
    
  }

  valueIsOperator(value: string):boolean {
    return (value == '+' || value == '-' || value == '*' || value == '/');
  }

  clearAll() {
    this.operation = '';
    this.result = '';
  }

  clearOperation() {
    this.operation = '';
  }

  clearLastChar() {
    if (this.operation.length > 0) {
      this.operation = this.operation.substring(0, this.operation.length - 1);
    }
  }

}
