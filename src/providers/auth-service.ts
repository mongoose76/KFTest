import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the NewsService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService {
    
    public username: string;
    public password: string;

    constructor(public http: Http) {

        // read default credentials
        // this should only be a DEV thing
        console.log('===== Reading credentials ... ');

        http.get('assets/data/credentials.json').map((res) => res.json()).subscribe(credentials => {
            this.username = credentials['username'];
            this.password = credentials['password'];
        });
    }

    public login(username: string, password: string) {
        this.username = username;
        this.password = password;

        console.log("credentials updated!");
    }
}