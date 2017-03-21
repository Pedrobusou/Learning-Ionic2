import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  palabra: string;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.palabra = "Clicked.var";
  }

  clicked() {
    let confirm = this.alertCtrl.create({
      title: 'Clicked',
      message: 'Mostrar en consola el contenido de la var global "palabra"?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Si',
          handler: () => {
            console.log(this.palabra);
          }
        }
      ]
    });
    confirm.present();
  }
}
