import { Component, OnInit } from '@angular/core';
import { IMem } from 'src/app/models/IMem.model';

import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-memoria-modal',
  templateUrl: './memoria-modal.page.html',
  styleUrls: ['./memoria-modal.page.scss'],
})
export class MemoriaModalPage implements OnInit {

  memoria:IMem[];

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
  }

  exit() {
    return this.modalCtrl.dismiss();
  }

}
