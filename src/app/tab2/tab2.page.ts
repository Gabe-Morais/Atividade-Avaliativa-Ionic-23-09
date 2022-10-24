import { Component } from '@angular/core';
import { evaluate } from 'mathjs';
import { IMem } from '../models/IMem.model';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular'; 
import { MemoriaModalPage } from '../utils/memoria-modal/memoria-modal.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  operation = '';
  result = '';
  number = false;
  caracter = true;
  caracteres = ['.', '/', '*', '-', '+']


  mem: IMem[] = [];


  constructor(private alertController: AlertController, private modalCtrl: ModalController) { }

  NgOnInt() { }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: MemoriaModalPage,
      componentProps: {
        memoria:this.mem
      }
    });
    modal.present();
  }

  async presentAlert(titulo: string, mensagem: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensagem,
      buttons: ['OK'],
    });

    await alert.present();
  }

  addValue(valor: string) {
    this.caracter = this.caracteres.includes(valor); //verificando se o ultimo digito é um operador e retorna um valor booleano (true /false)

    if (!this.caracter) { //falso, o usuario pode adicionar o simbulo de operação
      this.operation += valor;
      this.number = true;
    }
    else if (this.caracter && this.number) {
      this.operation += valor;
      this.number = false;
    }

  }

  adicionarMemoria() {
    if (this.operation != '' && this.result != '') {
      const mem: IMem = { operation: this.operation, result: Number(this.result) };
      this.mem.push(mem)
    }
    else if (this.operation != '' && this.result == '') {
      this.getResult();

      const mem: IMem = { operation: this.operation, result: Number(this.result) };
      this.mem.push(mem)
    }

    else {
      this.presentAlert('Aviso!', 'Nenhum Valor para adicionar');
    }


  }

  clearMem() {
    this.mem = []
  }

  showMemory() {
    const memoria: IMem = this.mem[this.mem.length-1];
    this.operation = memoria.operation;
    this.result = memoria.result.toString()
    console.log('Mostrou: ', this.mem);
  }

  SomaMemoria() {
    if(this.operation != ''){
      const memoria:IMem = this.mem[this.mem.length - 1];
      const novaMemoria:IMem = {operation:`${memoria.result} + ${this.result}`,
         result:memoria.result + Number(this.result)};
    
      this.mem.push(novaMemoria);
    }
    
  }

  SubMemoria() {
    if(this.operation != ''){
      const memoria:IMem = this.mem[this.mem.length - 1];
      const novaMemoria:IMem = {operation:`${memoria.result} - ${this.result}`,
         result:memoria.result - Number(this.result)};
         
      this.mem.push(novaMemoria);
    }
    
  }

  getResult() {
    try {
      this.result = evaluate(this.operation);
    }
    catch (err) {
      this.result = 'Inválido!';
    }
  }


  clearAll() {
    this.operation = '';
    this.result = '';
    this.number = false;
  }

  clearOperation() {
    this.operation = '';
    this.number = false;
  }

  clearLastChar() {
    if (this.operation.length > 0) {
      this.operation = this.operation.substring(0, this.operation.length - 1);
    }

    const lastchar = this.operation.substring(this.operation.length, 1); // verificando se o ultimo caractere é numero ou simbulo
    this.caracter = this.caracteres.includes(lastchar);

    console.log(lastchar)

    if (!this.caracter) {
      this.number = false;
    }
    else {
      this.number = true;
    }
  }

  
}
