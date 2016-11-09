import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { Contact } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ContactView } from '../pages/contact-view/contact-view';

@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        Contact,
        ContactView,
        HomePage,
        TabsPage
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        Contact,
        ContactView,
        HomePage,
        TabsPage
    ],
    providers: []
})
export class AppModule { }
