import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  leftOp = '0';
  rightOp = '0';
  Operator = '';
  fullOperation = '0';
  hasOperator = false;
  
  constructor() {}
    botao(numero){
        if(!this.hasOperator){
          this.leftOp === '0' ? this.leftOp = numero : this.leftOp += numero.toString();
          this.fullOperation = this.leftOp;
        }
    }
}
