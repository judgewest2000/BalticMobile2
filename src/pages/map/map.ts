/// <reference path="../../../main.d.ts" />"

import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


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

    postCode: string;

    constructor(public navCtrl: NavController, private elementRef: ElementRef, navParams: NavParams) {
        this.postCode = navParams.get('postcode');

    }

    ngAfterViewInit() {

        let init = (location: any) => {
            this.googleMap = new google.maps.Map(this.map.nativeElement, {
                center: location,
                zoom: 18,
                mapTypeId: google.maps.MapTypeId.HYBRID
            });

            new google.maps.Marker({
              position: location,
              map: this.googleMap,
              title: 'Target'
            });
        };


        let geoCoder = new google.maps.Geocoder();

        geoCoder.geocode({
            'address': `${this.postCode} UK`
        }, (results, status) => {
            if (results.length === 0) {
                alert('cannot find post code');
            } else {
                init(results[0].geometry.location);
            }
        });


    }
}

