import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CompanyJSON } from '../../providers/companies-service';
import { CompanyInfoPage } from '../company_info/company_info';

@Component({
    selector: 'page-company',
    templateUrl: 'company.html'
})

export class CompanyPage {

    public company: CompanyJSON;
    private tabs: {} = { 'info': 0, 'financials': 1, 'charts': 2, 'reports': 3, 'scoring': 4, 'map': 5 };

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        // If we navigated to this page, we will have an item available as a nav param
        this.company = navParams.get('company');
    }

    navigate2Page(event, tab) {
        this.navCtrl.push(CompanyInfoPage, {
            tabIndex: this.tabs[tab],
            company: this.company
        });
    }
}