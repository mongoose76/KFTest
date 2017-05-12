import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { NewsService } from '../../providers/news-service';

/**
 * Generated class for the News page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
    selector: 'page-news',
    templateUrl: 'news.html',
})
export class NewsPage {

    public news: any;

    constructor(public newsService: NewsService, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad News');
        this.loadNews();
    }

    loadNews() {
        this.newsService.load()
            .then(data => {
                this.news = data;
                console.log("=============== NewsWire: " + this.news.length + " news items found");
            });
    }

    showAlert(event, item) {

        let alert = this.alertCtrl.create({
            title: item.title,
            subTitle: item.description.substr(200),
            buttons: ['Dismiss']
        });
        alert.present();

    }
}
