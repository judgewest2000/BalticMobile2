/// <reference path="../../interfaces/entities.ts" />

import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ActionSheetController, ToastController } from 'ionic-angular';

import { MockObjects } from '../../mocks/mockobjects';

@Component({
    templateUrl: 'profile-view.html', 
    providers: [MockObjects]
})
export class ProfileView implements OnInit {

    entity: AIMC.Baltic.Mobile.App.Interfaces.Entities.Entity;

    id: number;

    constructor(private navController: NavController,
        private mockObjects: MockObjects,
        private actionSheetController: ActionSheetController,
        private toastController: ToastController,
        navParams: NavParams) {

        this.entity = navParams.get('entity');
    }

    formatProfile() {
        var text = this.entity.profile;
        text = text.replace(/(\r\n|\n|\r)/g, "<br />");
        return text;
    }

    ngOnInit() {
    }

    presentOptions() {

    }


}
