/// <reference path="../../interfaces/entities.ts" />

import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ActionSheetController, ToastController } from 'ionic-angular';

import { MockObjects } from '../../mocks/mockobjects';

import { ProfileView } from '../profile-view/profile-view';

import { MapPage } from '../map/map';

@Component({
    templateUrl: 'outlet-view.html',
    providers: [MockObjects]
})
export class OutletView implements OnInit {

    outlet: AIMC.Baltic.Mobile.App.Interfaces.Entities.Outlet;

    id: number;

    constructor(private navController: NavController,
        private mockObjects: MockObjects,
        private actionSheetController: ActionSheetController,
        private toastController: ToastController,
        navParams: NavParams) {

        this.id = navParams.get('id');
    }

    ngOnInit() {
        this.outlet = this.mockObjects.getOutlets().filter(o => o.id == this.id)[0];
    }

    getAddress() {
        let address = '';
        var includes = ['line1', 'line2', 'city', 'postCode'];
        for (let prop in this.outlet.address) {
            if (includes.some(i => i === prop)) {
                address += this.outlet.address[prop] + '<br />';
            }
        }
        return address;
    }

    goToMap() {
        this.navController.push(MapPage, {
            address: this.outlet.address
        });
    }

    call() {

        let actionSheet = this.actionSheetController.create({
            title: `Call ${this.outlet.telephone}`,
            buttons: [
                {
                    text: 'Confirm',
                    handler: () => {
                        var sanitizedNumber = this.outlet.telephone.replace(/\D/g, '');

                        window.open(`tel:${sanitizedNumber}`, `_system`, `location=yes`);
                    }
                },
                {
                    text: 'Cancel',
                    handler: () => {

                    }
                }
            ]
        });

        actionSheet.present();

    }

    email() {
        window.open(`mailto:${this.outlet.email}`, '_system', 'location=yes');
    }

    showProfile() {
        this.navController.push(ProfileView, {
            entity: this.outlet
        });
    }

    addToCart() {
        let actionSheet = this.actionSheetController.create({
            title: 'Add to Basket Confirm',
            buttons: [
                {
                    text: 'Confirm',
                    handler: () => {

                        let toast = this.toastController.create({
                            message: `${this.outlet.name} has been added to your briefcase`,
                            duration: 3000,
                            showCloseButton: true,
                            closeButtonText: 'OK'
                        });
                        toast.present();

                    }
                },
                {
                    text: 'Cancel',
                    handler: () => {

                        let toast = this.toastController.create({
                            message: `${this.outlet.name} has NOT been added to your briefcase`,
                            duration: 3000,
                            showCloseButton: true,
                            closeButtonText: 'OK'

                        });
                        toast.present();
                    }
                }
            ]
        });

        actionSheet.present();
    }


}
