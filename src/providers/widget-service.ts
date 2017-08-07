import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Injectable()
export class WidgetService {

    private PUBLIC_URL = 'http://mongoose76.ddns.net:8081/widgets/';
    private DEV_URL = 'http://localhost:3000/widgets/';
    private base_url;

    constructor(public http: Http, platform: Platform) {

        // use dev url when running locally
        if (platform.is('core') == true) {
            this.base_url = this.DEV_URL;
        } else {
            this.base_url = this.PUBLIC_URL;
        }
    }

    getMainMenu() {

        let url = this.base_url + 'menu';
        this.http.get(url).subscribe(data => {
            // Read the result field from the JSON response.
            //this.results = data['results'];
            console.log(data.text());
        });

    }

    getCompanyInfoTemplate(template: string): Promise<{}> {

        return new Promise(resolve => {

            let url = this.base_url + template;
            this.http.get(url).subscribe(data => {
                resolve(data.text());
            });

        });
    }

}