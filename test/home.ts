import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor() {
    
  }

  ionViewDidLoad() {
    // Put here the code you want to execute
    this.addDynamicElement();
  }

  addDynamicElement(){    
    
    var el = document.querySelector("div[name='testDiv']");
    if (el == null){
      console.log("Element not found!");
    }
    else{
      console.log("Element found!!");
    }
    
    el.insertAdjacentHTML('beforeend', "<p class='test'>TEST</p>");

  }

}
