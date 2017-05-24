import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CompanyJSON } from '../../providers/companies-service';
import { CompanyFinancialsPage } from '../company_financials/company_financials';
import { CompanyGenInfoPage } from '../company_gen_info/company_gen_info';

@Component({
    selector: 'page-company-info',
    templateUrl: 'company_info.html'
})


export class CompanyInfoPage {

    tab1Root = CompanyGenInfoPage;
    tab2Root = CompanyFinancialsPage;
    tab3Root = CompanyFinancialsPage;

    public company: CompanyJSON;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        // If we navigated to this page, we will have an item available as a nav param
        this.company = navParams.get('company');

        
    }
}