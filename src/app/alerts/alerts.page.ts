import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonAlert,IonButton,AlertController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.page.html',
  styleUrls: ['./alerts.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonAlert,IonButton]
})
export class AlertsPage implements OnInit {

  alertsButton = ['Confirm','Cancel','Later On'];
  clickalertsButton = ['Cancel'];

  alertOpen= false;

  alertController = inject(AlertController);
  constructor() { }

  ngOnInit() {
  }

  openModel(val:boolean){
    this.alertOpen = val;
  }

  async alertControl(){
    const alert = await this.alertController.create({
      header:"Testing the alter functionality",
      buttons:['Update Alert']
    });
    await alert.present();
  }

}
