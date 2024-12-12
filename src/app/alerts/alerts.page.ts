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

  advanceButton = [
    {
      text : "Install",
      role: "Install",
      handler: ()=>{
        console.log('Installing the latest ios version')
      }
    },
    {
      text : "Cancel",
      role: "Cancel",
      handler: ()=>{
        console.log('Cancel button is clicked')
      }
    }
  ]

  saveButton = ['Save','Cancel']

  inputArray =[
    {
      type:'text',
      placeholder:'Name'
    },
    {
      type:'Password',
      placeholder:'Password'
    }
  ]

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
      message:"Testing",
      buttons:['Update Alert']
    });
    await alert.present();
  }

  showResult(event:any){
    console.log(event)
  }

}
