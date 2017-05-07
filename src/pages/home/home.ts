import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { NewsService } from '../../providers/news-service';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [NewsService]
})
export class HomePage {

    public news: any;

    constructor(public newsService: NewsService, public navCtrl: NavController, public alertCtrl: AlertController) {
        this.loadNews();
    }

    loadNews() {
        this.newsService.load()
            .then(data => {
                this.news = data;
                //console.log("=============== this.news = " + JSON.stringify(this.news, null, " "));
            });
    }

    showAlert(event, item) {

        let alert = this.alertCtrl.create({
            title: item.title,
            subTitle: item.description,
            buttons: ['Dismiss']
        });
        alert.present();

    }
}