import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SimpleAlert } from './simple-alert';

@NgModule({
  declarations: [
    SimpleAlert,
  ],
  imports: [
    IonicPageModule.forChild(SimpleAlert),
  ],
  exports: [
    SimpleAlert
  ]
})
export class SimpleAlertModule {}
