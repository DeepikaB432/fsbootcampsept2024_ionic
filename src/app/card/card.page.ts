import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonCard,IonCardContent,IonCardHeader,IonCardTitle,IonItem,IonList,IonThumbnail,IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonCard,IonCardContent,IonCardHeader,IonCardTitle,IonItem,IonList,IonThumbnail,IonLabel]
})
export class CardPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
