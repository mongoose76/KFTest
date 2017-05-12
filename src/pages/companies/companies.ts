﻿import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CompaniesService, CompanyJSON } from '../../providers/companies-service';

@Component({
    selector: 'page-list',
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
}