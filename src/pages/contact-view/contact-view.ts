/// <reference path="../../interfaces/entities.ts" />

import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ActionSheetController, ToastController } from 'ionic-angular';

import { MockObjects } from '../../mocks/mockobjects';

import { OutletView } from '../outlet-view/outlet-view';

import { ProfileView } from '../profile-view/profile-view';

import { MapPage } from '../map/map';

@Component({
    templateUrl: 'contact-view.html',
    providers: [MockObjects]
})
export class ContactView implements OnInit {

    contact: AIMC.Baltic.Mobile.App.Interfaces.Entities.Contact;

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
        this.contact = this.mockObjects.getContacts().filter(c => c.id == this.id)[0];
        this.outlet = this.mockObjects.getOutlets().filter(o => o.id == this.contact.outletId)[0];

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



    call() {

        let actionSheet = this.actionSheetController.create({
            title: `Call ${this.contact.telephone}`,
            buttons: [
                {
                    text: 'Confirm',
                    handler: () => {
                        var sanitizedNumber = this.contact.telephone.replace(/\D/g, '');

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
        window.open(`mailto:${this.contact.email}`, '_system', 'location=yes');
    }

    goToOutlet() {
        this.navController.push(OutletView, {
            id: this.outlet.id
        });
    }

    goToMap() {
        this.navController.push(MapPage, {
            address: this.outlet.address
        });
    }

    showProfile() {
        this.navController.push(ProfileView, {
            entity: this.contact
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
                            message: `${this.contact.name} has been added to your briefcase`,
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
                            message: `${this.contact.name} has NOT been added to your briefcase`,
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
