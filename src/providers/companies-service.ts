import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

export interface CompanyJSON {
    ID?: string
    Name?: string
    COD?: string
    RegNo?: string
    FiscalCode?: string
    State?: string
    County?: string
    Town?: string
    IdCAEN?: string
}

/*
  Generated class for the CompaniesService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CompaniesService {

    serviceUrl: string = 'http://rrws.rocomp.ro/service.asmx';
    targetNamespace: string = 'http://tempuri.org';
    username: string;
    password: string;

    constructor(public http: Http) {

        // read soap service credentials

        console.log('===== Reading credentials ... ');

        http.get('assets/data/credentials.json').map((res) => res.json()).subscribe(data => {
            this.setCredentials(data);
        });
    }

    /**
     * Set credentails (4DEV)

     * @param credentials
     */
    setCredentials(credentials:any) {

        console.log('===== Credentials = ' + JSON.stringify(credentials, null, '  '));

        this.username = credentials['username'];
        this.password = credentials['password'];
    }

    search(keyword: string): Promise<CompanyJSON[]> {

        return new Promise(resolve => {

            var envelopedRequest: string = this.getEnvelope(keyword);
            var method: string = 'GetCompanyAdvanced';
            var xmlHttp: XMLHttpRequest = new XMLHttpRequest();

            xmlHttp.onreadystatechange = () => {

                console.log('XMLHttpRequest ready state: ' + xmlHttp.readyState);

                if (4 == xmlHttp.readyState) {

                    console.log('XMLHttpRequest status: ' + xmlHttp.status);
                    console.log('XMLHttpRequest status text: ' + xmlHttp.statusText);
                    console.log('XMLHttpRequest response type: ' + xmlHttp.responseType);
                    //console.log('XMLHttpRequest response headers: ' + xmlHttp.getAllResponseHeaders());
                    console.log('XMLHttpRequest response: ' + xmlHttp.response);

                    let soap_result: NodeListOf<Element> = xmlHttp.responseXML.getElementsByTagName('Table');
                    //let table: Element = soap_result.getElementByTagName
                    //console.log('XMLHttpRequest responseXML: ' + soap_result);

                    console.log('XMLHttpRequest child 0: ' + soap_result[0]);

                    /*
                    for (let i = 0; i < soap_result.length; i++) {
                        let child = soap_result.item[i];
                        console.log('XMLHttpRequest child: ' + child);
                    }
                    */

                    //var responseNodeList: NodeListOf<Element> = xmlHttp.responseXML;

                    let res = [];

                    for (let i = 0; i < soap_result.length; i++) {
                        let companyDataJSON: CompanyJSON = this.xml2json(soap_result[i]);
                        console.log("===== companyDataJSON " + JSON.stringify(companyDataJSON, null, '  '));
                        res.push(companyDataJSON);
                    }
                    
                    resolve(res)
                }
            }

            // send SOAP request
            xmlHttp.open("POST", this.serviceUrl, true);

            //xmlHttp.setRequestHeader("SOAPAction", this.targetNamespace + '/' + encodeURIComponent(method));
            xmlHttp.setRequestHeader("Content-Type", "text/xml; charset=utf-8");

            xmlHttp.send(envelopedRequest);
        });
    }

    /**
     * Converts company data from XML to JSON
     * @param xmlData
     */
    private xml2json(xmlData: Element): CompanyJSON {

        let res = {};

        for (let i = 0; i < xmlData.children.length; i++) {            
            let childName = xmlData.childNodes[i].nodeName;
            let childValueString = xmlData.childNodes[i].textContent;
            res[childName] = childValueString;
        }

        return res;
    }

    private getEnvelope(keyword: string): string {
        let req = 
            `<x:Envelope xmlns:x="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
                <x:Header>
                    <tem:Credentials>
                        <tem:Username>${this.username}</tem:Username>
                        <tem:Password>${this.password}</tem:Password>
                    </tem:Credentials>
                </x:Header>
                <x:Body>
                    <tem:GetCompanyAdvanced>
                        <tem:fiscalCode></tem:fiscalCode>
                        <tem:name>${keyword}</tem:name>
                        <tem:status>0</tem:status>
                        <tem:searchMode>1</tem:searchMode>
                    </tem:GetCompanyAdvanced>
                </x:Body>
            </x:Envelope>`;

        return req;
    }

}