import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CompaniesService, CompanyJSON } from '../../providers/companies-service';
import { CompanyPage } from '../company/company';
import { LoadingController, Loading } from 'ionic-angular';

@Component({
    selector: 'page-company-search',
    templateUrl: 'company_search.html',
    providers: [CompaniesService]
})


export class CompanySearchPage {

    public companies: CompanyJSON[];
    public keyword: string;    
    public results: any;

    constructor(public companiesService: CompaniesService, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
        this.companies = [];
        this.keyword = "Iron Sheep";
    }

    showLoader(): Loading {

        let loader: Loading = this.loadingCtrl.create({
            content: "Shaving legs..."
        });
        loader.present();
        return loader;
    }

    searchCompanies(keyword: string) {

        console.log("searching companies using keyword => " + this.keyword);

        let loader: Loading = this.showLoader();

        this.companiesService.search(this.keyword)
            .then(data => {
                this.companies = data;

                loader.dismiss();
            });
    }

    itemTapped(event, item) {
        // Navigating to company details page
        this.navCtrl.push(CompanyPage, {
            company: item
        });
    }
}