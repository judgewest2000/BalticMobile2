/// <reference path="../../interfaces/entities.ts" />

import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ActionSheetController, ToastController } from 'ionic-angular';

import { MockObjects } from '../../mocks/mockobjects';

import { OutletView } from '../outlet-view/outlet-view';

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
    
    call() {
        document.location.href = `tel:${this.contact.telephone}`;
    }

    email() {
        document.location.href = `mailto:${this.contact.email}`;
    }

    goToOutlet() {
        this.navController.push(OutletView, {
            id: this.outlet.id
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
