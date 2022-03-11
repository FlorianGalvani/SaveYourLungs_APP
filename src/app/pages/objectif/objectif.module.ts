import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObjectifPageRoutingModule } from './objectif-routing.module';

import { ObjectifPage } from './objectif.page';
import { Push, PushObject, PushOptions } from '@awesome-cordova-plugins/push/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObjectifPageRoutingModule
  ],
  declarations: [ObjectifPage],
  providers: [Push]
})
export class ObjectifPageModule {}
