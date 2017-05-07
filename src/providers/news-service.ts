import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the NewsService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NewsService {

    rssToJsonServiceBaseUrl = 'https://api.rss2json.com/v1/api.json?rss_url=';
    apiUrl = 'http://keysfin.com/Handlers/RSS.ashx?feed=rss-keysfin';
    data: any[]

    constructor(public http: Http) {}

    load() {

        if (this.data) {
            // already loaded data
            return Promise.resolve(this.data);
        }

        // don't have the data yet
        return new Promise(resolve => {
            // We're using Angular HTTP provider to request the data,
            // then on the response, it'll map the JSON data to a parsed JS object.
            // Next, we process the data and resolve the promise with the new data.
            this.http.get(this.rssToJsonServiceBaseUrl + this.apiUrl)
                .map(res => {
                    //console.log("=============== IT WORKED 2: " + JSON.stringify(res.json(), null, " "));
                    return res.json()
                })
                .subscribe(res => {
                    //console.log(res);
                    // we've got back the raw data, now generate the core schedule data
                    // and save the data for later reference
                    this.data = res.items;
                    resolve(this.data);
                });
        });

    }

}