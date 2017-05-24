import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CompanyJSON } from '../../providers/companies-service';

@Component({
    selector: 'page-company-financials',
    templateUrl: 'company_financials.html'
})


export class CompanyFinancialsPage {

    public company: CompanyJSON;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        // Company data is passed by the tabs root page
        this.company = navParams.data;
    }
}