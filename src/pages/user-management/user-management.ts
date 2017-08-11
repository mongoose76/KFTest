import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';

/**
 * Generated class for the UserManagementPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
    selector: 'page-user-management',
    templateUrl: 'user-management.html',
})
export class UserManagementPage {

    public username: string;
    public password: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthService) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad UserManagementPage');
    }

    login(event) {
        this.auth.login(this.username, this.password);        
    }

}
