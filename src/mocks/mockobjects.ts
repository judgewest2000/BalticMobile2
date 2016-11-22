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
            },
            {
                id: 100571,
                name: 'Adam Sills',
                avatarUrl: 'https://pbs.twimg.com/profile_images/704631788019314688/D20twdRX_normal.jpg',
                telephone: '+44 (20) 7931 2000',
                email: 'adam.sills@telegraph.co.uk',
                profile: `Adam Sills is the head of sport for The Daily Telegraph, The Sunday Telegraph and Telegraph and covers sports. He can be contacted by email.

Sills is part of the Sports Desk.

Sills was previously the head of sport planning for The Guardian.`,
                outletId: 27495
            },
            {
                id: 100499,
                name: 'Daniela Agnelli',
                avatarUrl: 'https://pbs.twimg.com/profile_images/435789907018391553/M6_74r08_normal.jpeg',
                telephone: '+44 (20) 7931 3639',
                email: 'daniela.agnelli@telegraph.co.uk',
                profile: `Daniela Agnelli is the fashion director for The Sunday Telegraph and the Telegraph Magazine, supplement of The Daily Telegraph and covers fashion, style, fashion shows and fashion designers. She can be contacted by email.

Agnelli is part of the Fashion Desk.`,
                outletId: 27495
            },
            {
                id: 100391,
                name: 'Jason Burt',
                avatarUrl: 'https://pbs.twimg.com/profile_images/742447294558113797/5oEWaCz2_normal.jpg',
                telephone: '+44 (20) 7931 2000',
                email: 'jason.burt@telegraph.co.uk',
                profile: `Jason Burt is the chief football correspondent for The Daily Telegraph and The Sunday Telegraph and covers football. He can be contacted by email.

He is part of the Sports Desk.`,
                outletId: 27495
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
                address: {
                    line1: '1 Southwark Bridge',
                    city: 'London',
                    postCode: 'SE1 9HL',
                    latitude: 51.50746410000001,
                    longitude: -0.09441949999995813

                },
                profile: `Financial Times is a broadsheet newspaper covering business, finance, politics and technology. The weekday section provides features on business people, ideas and developments, delivering information on business and finance. FTfm section covers global fund management industry, prices and FT fund ratings, providing analysis and debate to asset managers and private investors. The newspaper was first published in 1888 and is published Monday to Saturday.

The outlet offers RSS (Really Simple Syndication)

ISSN: 0307-1766 
PR Accepted in: English 

National Readership Survey (NRS) Readership Estimates - Newspapers and Supplements AIR - Latest 12 Months : April 2012 - March 2013
Est Population 15+ : 50828(000) 
Total Adult AIR: 312(000) = 0.6% 
Total Men AIR: 229(000) = 0.9% 
Total Women AIR: 83(000) = 0.3% 
Total 15-34 AIR: 122(000) = 0.8% 
Total 35+ AIR: 190(000) = 0.5% 
Total ABC1 AIR: 268(000) = 1.0% 
Total C2DE AIR: 44(000) = 0.1% 

Awards: British Press Awards: Newspaper of the Year (2008) 

Letters to the editor should be sent to letters.editor@ft.com 
All appointment changes should go through conews@ft.com

Main Financial Times Desks - 
Arts Desk - Email : arts@ft.com 
Capital Markets Desk - Tel No : 020 7873 3216 
Comment & Analysis Desk - Tel No : 020 7775 6443 
Consumer Service - Tel No : 020 7873 4864 
Economics Desk - Tel No : 020 7873 3214 
Graphics Desk - Tel No : 020 7873 3000 
Industry Desk - 020 7873 3471 
Lex Commentators Desk - Email : lexdesk@ft.com 
Markets Desk - Tel No : 020 7873 3000 
Media Desk - Tel No : 020 7873 4073 
Money FT - Tel No : 020 7873 3544 
News Desk - Tel No : 020 7873 3433 Email : ean@ft.com 
Pictures Desk - Tel No : 020 7873 3655 Email : pictures@ft.com 
Political Desk - Tel No : 020 7873 3379 
Public Policy Group - Tel No : 020 7873 4155 
Special Reports : email : reports@ft.com
UK Companies Desk  Email : companies@ft.com 
Weekend FT - Tel No : 020 7873 3000 Email : eaw@ft.com 
World News Desk : Tel No : 020 7873 3000

Daily Newspaper Sections :
FT Life & Arts
FT House & Home
FT Money Guide
FT Digital Business
FastFT
Executive Appointments

Daily Newspaper Special Sections (Please see supplements tab for the full listing) :
How To Spend It
FT Weekend Magazine
FT Global Traveller
FT Wealth Magazine
FT Money

Daily Newspaper Editions:
Financial Times (1st Edition)
Financial Times (Frankfurt Edition)
`
            }, {
                id: 27495,
                name: 'The Sunday Telegraph (Daily Newspaper)',
                avatarUrl: 'https://pbs.twimg.com/profile_images/704631788019314688/D20twdRX_normal.jpg',
                telephone: '+44 (20) 7931 2000',
                email: 'stnews@telegraph.co.uk',
                 address: {
                    line1: '111 Buckingham Palace Road',
                    city: 'London',
                    postCode: 'SW1W 0DT',
                    latitude: 51.4948533,
                    longitude: -0.14582849999999326
                },
                profile: `The Sunday Telegraph is a Sunday newspaper covering news, current affairs, business, culture, entertainment,  jobs, lifestyle, money, sport and travel. 

The paper was awarded 'Front Page of the Year' at the Press Awards.

National Readership Survey (NRS) Readership Estimate - Newspaper and Supplements:
AIR - Latest 12 Months: January 2014 - December 2014

Est Population 15+ : 51742(000)
Total Adult AIR: 1238(000) = 2.4% 
Total Men AIR: 646(000) = 2.6%
Total Women AIR: 592(000) = 2.2%
Total 15-34 AIR: 170(000) = 1.0%
Total 35+ AIR: 1068(000) = 3.0%
Total ABC1 AIR: 1071(000) = 3.9%
Total C2DE AIR: 167(000) = 0.7%

Main Sunday Telegraph Desk's :
City Desk - Tel No: 020 7931 2710
Foreign Desk - Email : dtforeign@telegraph.co.uk, 
News Desk - Tel No: 020 7931 3515, Email: stnews@telegraph.co.uk,
Sports Desk - Tel no: 020 7931 2600, Email: lesley.macdonald@telegraph.co.u,
Travel Desk - Tel no: 020 7931 2381, Email: traveldesk@telegraph.co.uk,
Arts Desk- Email: artsfrontdesk@telegraph.co.uk

Daily Newspaper Sections :
Business - Email : city@telegraph.co.uk, Tel no: 020 7931 2000,
Discover - Email : traveldesk@telegraph.co.uk, Tel no: 020 7931 2000 (do not send press material here. Send an email and you will receive an automated response with a list of relevant email addresses), 
Life - Email: life@telegraph.co.uk,
Money - Email : city@telegraph.co.uk, Tel no: 020 7931 2000, 
Sport - Email : stport@telegraph.co.uk, Tel no : 020 7931 2600, 

Daily Newspaper Special Sections (Please see supplements tab for the full listing) :
Life
Stella`
            }
        ];

        return outlets;
    }


    constructor() { }

}

