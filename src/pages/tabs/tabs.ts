import { Component } from '@angular/core';

import { PeoplePage } from '../people/people';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { CompaniesPage } from '../companies/companies';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    tabs: any[] = [HomePage, CompaniesPage, PeoplePage, ContactPage];

    constructor() {}
}
