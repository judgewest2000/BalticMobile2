
declare module AIMC.Baltic.Mobile.App.Interfaces.Entities {

    interface Address {
        line1: string;
        line2?: string;
        city: string;
        postCode: string;
        latitude: number;
        longitude: number;

    }

    interface Entity {
        id: number;
        name: string;
        avatarUrl: string;
        telephone: string;
        email: string;
        profile: string;

    }

    interface Contact extends Entity {
        outletId: number;
    }

    interface Outlet extends Entity {
        address: Address
    }



}

