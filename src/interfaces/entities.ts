
declare module AIMC.Baltic.Mobile.App.Interfaces.Entities {

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

    }



}

