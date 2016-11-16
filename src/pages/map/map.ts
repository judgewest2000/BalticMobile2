/// <reference path="../../../main.d.ts" />"

import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';


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

  @ViewChild('map') map;


  googleMap: google.maps.Map;

  constructor(public navCtrl: NavController, private elementRef: ElementRef) {

   

  }


  ngAfterViewInit() {
    this.googleMap = new google.maps.Map(this.map.nativeElement, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  }
}

