import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { NewsService } from '../../providers/news-service';
import { NewsDetailsPage } from '../news_details/news_details'

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
        console.log('NewsPage: ionViewDidLoad()');
        this.loadNews();
    }

    loadNews() {
        this.newsService.load()
            .then(data => {
                this.news = data;
                console.log("=============== NewsWire: " + this.news.length + " news items found");
            });
    }

    itemTapped(event, item) {
        // Navigating to news details page
        this.navCtrl.push(NewsDetailsPage, {
            news: item
        });
    }

}
