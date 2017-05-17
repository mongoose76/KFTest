import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CompaniesService, CompanyJSON } from '../../providers/companies-service';
import { CompanyPage } from '../company/company';

@Component({
    selector: 'page-company-search',
    templateUrl: 'company_search.html',
    providers: [CompaniesService]
})


export class CompanySearchPage {

    public companies: CompanyJSON[];
    public keyword: string;
    public showSpinner:any = 0;

    constructor(public companiesService: CompaniesService, public navCtrl: NavController, public navParams: NavParams) {
        this.companies = [];
        this.keyword = "Iron Sheep";        
    }

    searchCompanies(keyword: string) {

        console.log("searching companies using keyword => " + this.keyword);

        this.showSpinner = 1;

        this.companiesService.search(this.keyword)
            .then(data => {
                this.companies = data;
                this.showSpinner = 0;
            });
    }

    itemTapped(event, item) {
        // Navigating to company details page
        this.navCtrl.push(CompanyPage, {
            company: item
        });
    }
}