import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonGrid,IonRow,IonCol } from '@ionic/angular/standalone';

@Component({
  selector: 'app-grids',
  templateUrl: './grids.page.html',
  styleUrls: ['./grids.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonGrid,IonRow,IonCol]
})
export class GridsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
