import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButton,NavController,IonList,IonItem,IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButton,IonList,IonItem,IonLabel]
})
export class ListPage implements OnInit {

  navcontroller:NavController= inject(NavController)
  constructor() { }

  ngOnInit() {
  }

  moveBack(){
    this.navcontroller.back();
  }

}
