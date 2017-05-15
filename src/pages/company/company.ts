import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CompaniesService, CompanyJSON } from '../../providers/companies-service';

@Component({
    selector: 'page-list',
    templateUrl: 'company.html',
    providers: [CompaniesService]
})


export class CompaniesPage {

    public company_data: CompanyJSON;
    public keyword: string;

    constructor(public companiesService: CompaniesService, public navCtrl: NavController, public navParams: NavParams) {
        this.company_data = {};
    }

    searchCompanies(keyword: string) {

        console.log("searching companies using keyword => " + this.keyword);

        this.companiesService.search(this.keyword)
            .then(data => {
                console.log("companies service response => " + data[0].Name);
                this.company_data = data[0];
            });
    }
}