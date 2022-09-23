import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  valor1 = '';
  valor2 = '';
  resultado = 0;
  currentOp = ''

  constructor(private alertController: AlertController) {}

  async operacaoSomar() {
    this.resultado = Number(this.valor1) + Number(this.valor2)
    this.currentOp = 'Soma';
    const alert = await this.alertController.create({
      header: 'Resultado',
      message: `<p>Valor 1: ${this.valor1}<p/>
                <p>Valor 2: ${this.valor2}<p/>
                <p>Resultado da Soma: ${this.resultado}<p/>`,
      buttons: ['OK'],
    });

    await alert.present();
  }


  async operacaoSubtrair() {
    this.resultado = Number(this.valor1) - Number(this.valor2)
    this.currentOp = 'Subtração';
    const alert = await this.alertController.create({
      header: 'Resultado',
      message: `<p>Valor 1: ${this.valor1}<p/>
                <p>Valor 2: ${this.valor2}<p/>
                <p>Resultado da Subtração: ${this.resultado}<p/>`,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async operacaoMulti() {
    this.resultado = Number(this.valor1) * Number(this.valor2)
    this.currentOp = 'Multiplicação';
    const alert = await this.alertController.create({
      header: 'Resultado',
      message: `<p>Valor 1: ${this.valor1}<p/>
                <p>Valor 2: ${this.valor2}<p/>
                <p>Resultado da Multiplicação: ${this.resultado}<p/>`,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async operacaoDividir() {
    this.resultado = Number(this.valor1) / Number(this.valor2)
    this.currentOp = 'Divisão';
    const alert = await this.alertController.create({
      header: 'Resultado',
      message: `<p>Valor 1: ${this.valor1}<p/>
                <p>Valor 2: ${this.valor2}<p/>
                <p>Resultado da Dividir: ${this.resultado}<p/>`,
      buttons: ['OK'],
    });

    await alert.present();
  }

  
  async maior() {
    this.resultado = Number(this.valor1) > Number(this.valor2) ? Number(this.valor1) : Number(this.valor2);
    this.currentOp = 'Maior Valor';
    const alert = await this.alertController.create({
      header: 'Resultado',
      message: `<p>Valor 1: ${this.valor1}<p/>
                <p>Valor 2: ${this.valor2}<p/>
                <p>O Maior Valor é: ${this.resultado}<p/>`,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async menor() {
    this.resultado = Number(this.valor1) < Number(this.valor2) ? Number(this.valor1) : Number(this.valor2);
    this.currentOp = 'Menor Valor';
    const alert = await this.alertController.create({
      header: 'Resultado',
      message: `<p>Valor 1: ${this.valor1}<p/>
                <p>Valor 2: ${this.valor2}<p/>
                <p>O Menor Valor é: ${this.resultado}<p/>`,
      buttons: ['OK'],
    });

    await alert.present();
  }

  limpar(){
    this.valor1 = '';
    this.valor2 = '';
    this.resultado = 0;
    this.currentOp = '';
  }
  

}
