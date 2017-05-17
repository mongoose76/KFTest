import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { NewsPage } from '../news/news';
import { CompanySearchPage } from '../company_search/company_search'

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    private pages = { 'search': CompanySearchPage, 'news': NewsPage, 'monitoring': NewsPage, 'press_monitoring': NewsPage, 'about': NewsPage, 'login': NewsPage }

    constructor(public alertCtrl: AlertController, public navCtrl: NavController) {
    }

    ionViewDidEnter() {       
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