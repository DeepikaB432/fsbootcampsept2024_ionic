import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, NavController,IonButton,IonList,IonItem,IonInput,IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButton,IonList,IonItem,IonInput,IonLabel]
})
export class InputPage implements OnInit {

  navcontroller:NavController= inject(NavController)
  constructor() { }

  ngOnInit() {
  }

  moveBack(){
    this.navcontroller.back()
  }
}
