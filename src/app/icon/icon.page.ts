import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton,IonIcon,IonItem } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart,settings,wifi,batteryCharging } from 'ionicons/icons';
import { RouterLink, RouterModule } from '@angular/router';
import { NavController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.page.html',
  styleUrls: ['./icon.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButton,IonIcon,IonItem,RouterLink,RouterModule]
})
export class IconPage implements OnInit {

  navController:NavController = inject(NavController);
  constructor() {
    addIcons({ heart,settings,wifi,batteryCharging });
   }

  ngOnInit() {
  }
  moveBack(){
    this.navController.back();
  }

}
