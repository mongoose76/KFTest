import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CompaniesService } from '../../providers/companies-service';

@Component({
    selector: 'page-list',
    templateUrl: 'companies.html',
    providers: [CompaniesService]
})
export class CompaniesPage {

    public news: any;

    constructor(public companiesService: CompaniesService, public navCtrl: NavController, public navParams: NavParams) {

        this.companiesService.load()
            .then(data => {
                this.news = [];
                for (let i = 1; i < 11; i++) {
                    this.news.push({
                        title: 'Item ' + i,
                        note: 'This is item #' + i
                    });
                }
            });
        
    }
}
