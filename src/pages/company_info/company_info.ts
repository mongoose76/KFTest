import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CompanyJSON } from '../../providers/companies-service';


@Component({
    selector: 'page-company-info',
    templateUrl: 'company_info.html'
})
export class CompanyInfoPage {

    public section: string;
    public company: CompanyJSON;    

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        // If we navigated to this page, we will have an item available as a nav param
        this.company = navParams.get('company');
        this.section = navParams.get('section');
    }

}