/// <reference path="../../interfaces/entities.ts" />

import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MockObjects } from '../../mocks/mockobjects';

@Component({
    templateUrl: 'contact-view.html',
    providers: [MockObjects]
})
export class ContactView implements OnInit {

    contact: AIMC.Baltic.Mobile.App.Interfaces.Entities.Contact;

    outlet: AIMC.Baltic.Mobile.App.Interfaces.Entities.Outlet;

    id: number;

    constructor(private navController: NavController, private mockObjects: MockObjects, navParams: NavParams) {
        this.id = navParams.get('id');
    }
    
    ngOnInit() {
        this.contact = this.mockObjects.getContacts().filter(c => c.id == this.id)[0];
        this.outlet = this.mockObjects.getOutlets().filter(o => o.id == this.contact.outletId)[0];

    }

    presentOptions() {
        
    }

    call() {
        document.location.href = `tel:${this.contact.telephone}`;
    }

    email() {
        document.location.href = `email:${this.contact.email}`;
    }

    addToCart() {
        alert('added');
    }


}
