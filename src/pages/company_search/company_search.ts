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
    private loader: Loading;

    constructor(public companiesService: CompaniesService, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
        this.companies = [];
        this.keyword = "Iron Sheep";
    }

    showLoader() {
        let msgs: string[] = ["Shaving legs...", "Chillin' with a beer", "Planning to take over the world", "Actually fetching the data"];

        this.loader = this.loadingCtrl.create({
            content: msgs[Math.floor(Math.random() * msgs.length)]
        });
        this.loader.present();
    }

    hideLoader() {
        this.loader.dismiss();
    }

    searchCompanies(keyword: string) {

        console.log("searching companies using keyword => " + this.keyword);

        this.showLoader();

        this.companiesService.search(this.keyword)
            .then(data => {
                this.companies = data;

                this.hideLoader();
            });
    }

    itemTapped(event, item) {
        // Navigating to company details page
        this.navCtrl.push(CompanyPage, {
            company: item
        });
    }
}