import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ContactPage } from '../pages/contact/contact';
import { CompaniesPage } from '../pages/companies/companies';
import { PeoplePage } from '../pages/people/people';
import { AboutPage } from '../pages/about/about';

import { StarWarsService } from '../providers/star-wars-service';
import { NewsService } from '../providers/news-service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        AboutPage,
        ListPage,
        ContactPage,
        CompaniesPage,
        PeoplePage
    ],
    imports: [
        BrowserModule,
        HttpModule,
        IonicModule.forRoot(MyApp),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        AboutPage,
        ListPage,
        ContactPage,
        CompaniesPage,
        PeoplePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        StarWarsService,
        NewsService,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }
