import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CompaniesService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CompaniesService {

    serviceUrl = '/service.asmx';
    targetNamespace = 'http://tempuri.org';

    responseJso: {} = null;

    constructor(public http: Http) {}

    load() {

        return new Promise(resolve => {

            //var request: string = this.toXml(parameters);
            var request: string = `<tem:GetCompanyAdvanced>
                        <tem:fiscalCode></tem:fiscalCode>
                        <tem:name>KeysFin</tem:name>
                        <tem:status>0</tem:status>
                        <tem:searchMode>1</tem:searchMode>
                    </tem:GetCompanyAdvanced>`;

            var envelopedRequest: string = this.getEnvelope(request);
            var method: string = 'GetCompanyAdvanced';
            var xmlHttp: XMLHttpRequest = new XMLHttpRequest();

            xmlHttp.onreadystatechange = () => {

                console.log('XMLHttpRequest ready state: ' + xmlHttp.readyState);

                if (4 == xmlHttp.readyState) {

                    console.log('XMLHttpRequest status: ' + xmlHttp.status);
                    console.log('XMLHttpRequest status text: ' + xmlHttp.statusText);
                    console.log('XMLHttpRequest response headers: ' + xmlHttp.getAllResponseHeaders());

                    //var responseNodeList: NodeListOf<Element> = xmlHttp.responseXML;

                    console.log(xmlHttp.responseText);

                    resolve({})
                }
            }

            // send SOAP request
            xmlHttp.open("POST", this.serviceUrl, true);

            xmlHttp.setRequestHeader("SOAPAction", this.targetNamespace + '/' + encodeURIComponent(method));
            xmlHttp.setRequestHeader("Content-Type", "text/xml; charset=utf-8");

            xmlHttp.send(envelopedRequest);
        });
    }

    private getEnvelope(request: string): string {
        let req = 
            `<x:Envelope xmlns:x="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
                <x:Header>
                    <tem:Credentials>
                        <tem:Username>hdsoftware</tem:Username>
                        <tem:Password>hdsoftware#1</tem:Password>
                    </tem:Credentials>
                </x:Header>
                <x:Body>
                    <tem:GetCompanyAdvanced>
                        <tem:fiscalCode></tem:fiscalCode>
                        <tem:name>KeysFin</tem:name>
                        <tem:status>0</tem:status>
                        <tem:searchMode>1</tem:searchMode>
                    </tem:GetCompanyAdvanced>
                </x:Body>
            </x:Envelope>`;

        return req;
    }

}