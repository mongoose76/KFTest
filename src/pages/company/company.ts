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

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        // If we navigated to this page, we will have an item available as a nav param
        this.company = navParams.get('company');
    }

    navigate2Page(event, section) {
        this.navCtrl.push(CompanyInfoPage, {
            section: section,
            company: this.company
        });
    }
}