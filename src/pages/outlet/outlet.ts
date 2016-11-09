/// <reference path="../../interfaces/entities.ts" />
/// <reference path="../contact-view/contact-view.ts" />


import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { MockObjects } from '../../mocks/mockobjects';

import { OutletView } from '../outlet-view/outlet-view';

@Component({
    templateUrl: 'outlet.html',
    providers: [MockObjects]
})
export class Outlet implements OnInit {

    outlets: AIMC.Baltic.Mobile.App.Interfaces.Entities.Outlet[];

    contacts: AIMC.Baltic.Mobile.App.Interfaces.Entities.Contact[];

    constructor(private navController: NavController, private mockObjects: MockObjects, private loadingController: LoadingController) {

    }

    getOutlet(contact: AIMC.Baltic.Mobile.App.Interfaces.Entities.Contact) {
        return this.outlets.filter(o => o.id === contact.outletId)[0];
    }

    getOutletContactCount(outlet: AIMC.Baltic.Mobile.App.Interfaces.Entities.Outlet) {
        return this.contacts.filter(c => c.outletId === outlet.id).length;
    }

    goToOutlet(outlet: AIMC.Baltic.Mobile.App.Interfaces.Entities.Outlet) {
        this.navController.push(OutletView, {
            id: outlet.id
        });
    }

    ngOnInit() {
        this.outlets = this.mockObjects.getOutlets();
        this.contacts = this.mockObjects.getContacts();
    }

    filterItems(ev) {
        var val: string = ev.target.value;

        this.outlets = this.mockObjects.getOutlets();

        if (val && val.trim() != '') {
            this.outlets = this.outlets.filter(o => o.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
           
        }
    }

}
