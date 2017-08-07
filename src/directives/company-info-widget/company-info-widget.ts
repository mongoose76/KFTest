import { Directive, ElementRef, Input } from '@angular/core';
import { WidgetService } from '../../providers/widget-service';
import { CompanyJSON } from '../../providers/companies-service';

/**
 * Generated class for the CompanyInfoWidgetDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
    selector: '[company-info-widget]' // Attribute selector
})
export class CompanyInfoWidgetDirective {

    @Input() protected company_data: CompanyJSON;

    private tpl: string;

    constructor(public el: ElementRef, public widgets: WidgetService) {
    }

    /**
     * Runs after the directives receives the input params
     */
    ngOnInit() {

        this.widgets.getCompanyInfo().then(tpl => {

            this.tpl = <string>tpl;
            this.el.nativeElement.insertAdjacentHTML('beforeend', this.applyData(this.tpl, this.company_data));
            //el.nativeElement.style.color = 'yellow';
        });
    }

    /**
     * Replace template placeholders with actual company data
     * @param tpl
     * @param company
     */
    private applyData(tpl: string, company: CompanyJSON) {

        for (var fld in company) {
            console.log(company[fld]);
            tpl = tpl.replace('{{company.' + fld + '}}', company[fld]);
        }

        return tpl;
    }
}