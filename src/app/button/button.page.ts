import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton,IonIcon,IonItem } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart,settings,wifi,batteryCharging } from 'ionicons/icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton,IonIcon,IonItem]
})
export class ButtonPage implements OnInit {

  constructor() { 
    addIcons({ heart,settings,wifi,batteryCharging });
  }

  ngOnInit() {
  }

}
