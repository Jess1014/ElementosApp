import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(public alertController: AlertController) { }
  onClick(){
    this.presentAlertConfirm();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Toma un pancito xd',
      subHeader: 'Bienvenido',
      message: 'Has conseguido una conchacornio',
      buttons: ['Okey...']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¡Es tu oportunidad!',
      message: '<strong>¿Quieres pan?</strong>',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sí',
          handler: () => {
            this.presentAlert();
            console.log('Toma un pancito xd');
          }
        }
      ]
    });

    await alert.present();
  }
  ngOnInit() {
  }

}
