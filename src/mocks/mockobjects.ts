/// <reference path="../interfaces/entities.ts" />

import { Injectable } from '@angular/core';

@Injectable()
export class MockObjects {

    getContacts() {

        var mockContacts: AIMC.Baltic.Mobile.App.Interfaces.Entities.Contact[] = [
            {
                id: 4125,
                name: 'Patrick Jenkins',
                avatarUrl: 'https://pbs.twimg.com/profile_images/428205000087461888/7j5nfw0s_normal.jpeg',
                telephone: '+44 (20) 7873 3787',
                profile: `Patrick Jenkins is the financial editor and assistant editor for the Financial Times and covers finance, investments and banking. He can be contacted by email.

Jenkins is part of the Finance Desk.

Prior to this role, Jenkins was the UK companies editor for the Financial Times.`,
                email: 'patrick.jenkins@ft.com',
                outletId: 515
            },
            {
                id: 199636,
                name: 'Aime Williams',
                avatarUrl: 'https://pbs.twimg.com/profile_images/557170368582926336/L-gQbUf1_normal.jpeg',
                telephone: '+44 (20) 7873 3000',
                email: 'aime.williams@ft.com',
                profile: 'Aime Williams is a reporter for Financial Times, money section. She covers asset management and investments. She can be contacted by email.',
                outletId: 515
            }
        ];

        return mockContacts;

    }


    getOutlets() {
        var outlets: AIMC.Baltic.Mobile.App.Interfaces.Entities.Outlet[] = [
            {
                id: 515,
                name: 'Financial Times',
                avatarUrl: 'https://pbs.twimg.com/profile_images/466972537704824832/eflEColL_normal.png',
                telephone: '+44 (20) 7873 3000',
                email: 'ean@ft.com',
                profile: `Financial Times is a broadsheet newspaper covering business, finance, politics and technology. The weekday section provides features on business people, ideas and developments, delivering information on business and finance. FTfm section covers global fund management industry, prices and FT fund ratings, providing analysis and debate to asset managers and private investors. The newspaper was first published in 1888 and is published Monday to Saturday.`
            }
        ];

        return outlets;
    }


    constructor() { }

}

