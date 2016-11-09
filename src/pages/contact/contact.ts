/// <reference path="../../interfaces/entities.ts" />
/// <reference path="../contact-view/contact-view.ts" />


import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MockObjects } from '../../mocks/mockobjects';

import { ContactView } from '../contact-view/contact-view';

@Component({
    templateUrl: 'contact.html',
    providers: [MockObjects]
})
export class Contact implements OnInit {

    outlets: AIMC.Baltic.Mobile.App.Interfaces.Entities.Outlet[];

    contacts: AIMC.Baltic.Mobile.App.Interfaces.Entities.Contact[];

    constructor(private navController: NavController, private mockObjects: MockObjects) {

    }

    getOutlet(contact: AIMC.Baltic.Mobile.App.Interfaces.Entities.Contact) {
        return this.outlets.filter(o => o.id === contact.outletId)[0];
    }

    goTo(contact: AIMC.Baltic.Mobile.App.Interfaces.Entities.Contact) {
        this.navController.push(ContactView, {
            id: contact.id
        });
    }

    ngOnInit() {
        this.outlets = this.mockObjects.getOutlets();
        this.contacts = this.mockObjects.getContacts();
    }


}
