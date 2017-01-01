import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
    selector: 'first-component',
    template: `
    <ion-list>
      <ion-item>
        <ion-label fixed>Name</ion-label>
         <ion-input type="text" [(ngModel)]="boundValue" ></ion-input>
      </ion-item>
      <ion-item>
        <h3>{{boundValue}}</h3>
      </ion-item>
    </ion-list>
    
    <ion-list>
      <ion-list-header>This is a header</ion-list-header>

      <ion-item>
        <ion-label>This is a label</ion-label>
        <ion-toggle></ion-toggle>
      </ion-item>
    </ion-list>

   <ion-fab left bottom>
    <button ion-fab><ion-icon name="bicycle"></ion-icon></button>
    <ion-fab-list side="top">
      <button ion-fab>Yes</button>
      <button ion-fab>No</button>
    </ion-fab-list>
  </ion-fab>
    `


})

export class FirstComponent {

    boundValue = 'abc';

    constructor(private alertController: AlertController) {

    }

 
}