import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ContactPage } from '../pages/contact/contact';
import { CompanySearchPage } from '../pages/company_search/company_search';
import { CompanyPage } from '../pages/company/company';
import { CompanyInfoPage } from '../pages/company_info/company_info';
import { CompanyGenInfoPage } from '../pages/company_gen_info/company_gen_info';
import { CompanyFinancialsPage } from '../pages/company_financials/company_financials';
import { NewsPage } from '../pages/news/news';
import { NewsDetailsPage } from '../pages/news_details/news_details';
import { PeoplePage } from '../pages/people/people';
import { AboutPage } from '../pages/about/about';

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
        CompanySearchPage,
        CompanyPage,
        CompanyInfoPage,
        CompanyGenInfoPage,
        CompanyFinancialsPage,
        NewsPage,
        NewsDetailsPage,
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
        CompanySearchPage,
        CompanyPage,
        CompanyInfoPage,
        CompanyGenInfoPage,
        CompanyFinancialsPage,
        NewsPage,
        NewsDetailsPage,
        PeoplePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        NewsService,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }
