import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton,IonIcon,IonItem } from '@ionic/angular/standalone';
import { RouterLink,RouterModule } from '@angular/router';
import { NavController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton,IonIcon,IonItem,RouterLink,RouterModule]
})
export class ButtonPage implements OnInit {

  navController:NavController = inject(NavController);
  constructor() { 
  }

  ngOnInit() {
  }

  moveBack(){
    this.navController.back();
  }

}
