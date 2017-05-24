import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CompanyJSON } from '../../providers/companies-service';

@Component({
    selector: 'page-company-charts',
    templateUrl: 'company_charts.html'
})


export class CompanyChartsPage {

    public company: CompanyJSON;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        // Company data is passed by the tabs root page
        this.company = navParams.data;
    }
}