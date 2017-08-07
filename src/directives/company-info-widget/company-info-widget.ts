import { Directive, Output, ElementRef, Input, EventEmitter } from '@angular/core';
import { WidgetService } from '../../providers/widget-service';

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

    private tpl: string;

    constructor(el: ElementRef, public widgets: WidgetService) {
        console.log('Hello CompanyInfoWidgetDirective Directive');

        this.widgets.getCompanyInfo().then(tpl => {
            //console.log(tpl);
            //this.addDynamicElement(data);
            this.tpl = <string>tpl;

            el.nativeElement.insertAdjacentHTML('beforeend', this.tpl);
            el.nativeElement.style.color = 'yellow';
        });
    }

}
