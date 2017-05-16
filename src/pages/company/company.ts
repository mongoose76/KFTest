﻿import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CompanyJSON } from '../../providers/companies-service';
import { NewsPage } from '../news/news';

@Component({
    selector: 'page-company',
    templateUrl: 'company.html'
})

export class CompanyPage {

    public company: CompanyJSON;
    private pages = { 'search': NewsPage, 'news': NewsPage, 'monitoring': NewsPage, 'press_monitoring': NewsPage, 'about': NewsPage, 'login': NewsPage }

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        // If we navigated to this page, we will have an item available as a nav param
        this.company = navParams.get('company');
    }

    navigate2Page(event, page) {
        this.navCtrl.push(this.pages[page], {
            company: this.company
        });
    }
}