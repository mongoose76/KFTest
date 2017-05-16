import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CompaniesService, CompanyJSON } from '../../providers/companies-service';
import { CompanyPage } from '../company/company';

@Component({
    selector: 'page-companies',
    templateUrl: 'companies.html',
    providers: [CompaniesService]
})


export class CompaniesPage {

    public companies: CompanyJSON[];
    public keyword: string;

    constructor(public companiesService: CompaniesService, public navCtrl: NavController, public navParams: NavParams) {
        this.companies = [];
    }

    searchCompanies(keyword: string) {

        console.log("searching companies using keyword => " + this.keyword);

        this.companiesService.search(this.keyword)
            .then(data => {
                this.companies = data;
            });
    }

    itemTapped(event, item) {
        // Navigating to company details page
        this.navCtrl.push(CompanyPage, {
            company: item
        });
    }
}