import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { NavController, AlertController } from 'ionic-angular';
import { NewsPage } from '../news/news';
import { CompanySearchPage } from '../company_search/company_search'
import { UserManagementPage } from '../user-management/user-management'

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage {

    private pages = { 'search': CompanySearchPage, 'news': NewsPage, 'monitoring': NewsPage, 'press_monitoring': NewsPage, 'about': NewsPage, 'login': UserManagementPage }
    public myDebug: string;

    constructor(public alertCtrl: AlertController, public navCtrl: NavController, platform: Platform) {

        this.myDebug = "Platform(s): " + platform.platforms().concat();

        this.myDebug += "<br>Engine: ";

        if (window.indexedDB) {
            this.myDebug += "WKWebView";
        } else {
            this.myDebug += "UIWebView";
        }

        this.myDebug += "<br>URL: " + platform.url();
    }

    navigate2Page(event, page) {
        this.navCtrl.push(this.pages[page]);
    }

    showAlert(text) {

        let alert = this.alertCtrl.create({
            title: "Boo Yaa",
            subTitle: text,
            buttons: ['Dismiss']
        });
        alert.present();

    }

}