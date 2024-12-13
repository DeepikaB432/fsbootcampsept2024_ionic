import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButton,NavController,IonFooter } from '@ionic/angular/standalone';

@Component({
  selector: 'app-model',
  templateUrl: './model.page.html',
  styleUrls: ['./model.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButton,IonFooter]
})
export class ModelPage implements OnInit {

  navcontroller:NavController=inject(NavController)
  constructor() { }

  ngOnInit() {
  }

  moveBack(){
    this.navcontroller.back();
  }

}
