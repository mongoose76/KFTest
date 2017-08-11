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
import { NewsPage } from '../pages/news/news';
import { NewsDetailsPage } from '../pages/news_details/news_details';
import { PeoplePage } from '../pages/people/people';
import { AboutPage } from '../pages/about/about';
import { UserManagementPage } from '../pages/user-management/user-management'

import { AuthService } from '../providers/auth-service';
import { NewsService } from '../providers/news-service';
import { WidgetService } from '../providers/widget-service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CompanyInfoWidgetDirective } from '../directives/company-info-widget/company-info-widget';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        AboutPage,
        UserManagementPage,
        ListPage,
        ContactPage,
        CompanySearchPage,
        CompanyPage,
        CompanyInfoPage,
        NewsPage,
        NewsDetailsPage,
        PeoplePage,
    CompanyInfoWidgetDirective
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
        UserManagementPage,
        ContactPage,
        CompanySearchPage,
        CompanyPage,
        CompanyInfoPage,
        NewsPage,
        NewsDetailsPage,
        PeoplePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        NewsService,
        WidgetService,
        AuthService,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }
