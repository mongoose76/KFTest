import { Component, ViewChild  } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CompanyJSON } from '../../providers/companies-service';
import { Tabs } from "ionic-angular";
import { CompanyFinancialsPage } from '../company_financials/company_financials';
import { CompanyGenInfoPage } from '../company_gen_info/company_gen_info';
import { CompanyChartsPage } from '../company_charts/company_charts';

@Component({
    selector: 'page-company-info',
    templateUrl: 'company_info.html'
})


export class CompanyInfoPage {

    tabIndex: number;

    tab1Root = CompanyGenInfoPage;
    tab2Root = CompanyFinancialsPage;
    tab3Root = CompanyChartsPage;
    tab4Root = CompanyFinancialsPage;
    tab5Root = CompanyFinancialsPage;
    tab6Root = CompanyFinancialsPage;
    
    public company: CompanyJSON;    

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        // If we navigated to this page, we will have an item available as a nav param
        this.company = navParams.get('company');
        this.tabIndex = navParams.get('tabIndex');
    }
}