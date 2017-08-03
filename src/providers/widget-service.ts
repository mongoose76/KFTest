﻿import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WidgetService {

    constructor(
        public http: Http
    ) { }

    getMainMenu() {

        let url = 'http://mongoose76.ddns.net:8081/widgets/menu';
        this.http.get(url).subscribe(data => {
            // Read the result field from the JSON response.
            //this.results = data['results'];
            console.log(data.text());
        });

    }

    getCompanyInfo(): Promise<{}> {

        return new Promise(resolve => {

            let url = 'http://mongoose76.ddns.net:8081/widgets/genInfo';
            this.http.get(url).subscribe(data => {
                resolve(data.text());
            });

        });
    }

}