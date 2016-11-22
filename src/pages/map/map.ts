/// <reference path="../../../main.d.ts" />"

import { Component, ElementRef } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';


/*
  Generated class for the Map page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-map',
    templateUrl: 'map.html'
})
export class MapPage {

    postCode: string;
  
    address: AIMC.Baltic.Mobile.App.Interfaces.Entities.Address;

    constructor(private menuController: MenuController, public navCtrl: NavController, private elementRef: ElementRef, navParams: NavParams) {
        this.address = navParams.get('address');
    }

}

