import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CompanyJSON } from '../../providers/companies-service';

@Component({
    selector: 'page-company-gen-info',
    templateUrl: 'company_gen_info.html'
})


export class CompanyGenInfoPage {

    public company: CompanyJSON;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        // Company data is passed by the tabs root page
        this.company = navParams.data;
    }
}