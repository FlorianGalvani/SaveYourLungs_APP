import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObjectifAllPageRoutingModule } from './objectif-all-routing.module';

import { ObjectifAllPage } from './objectif-all.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObjectifAllPageRoutingModule
  ],
  declarations: [ObjectifAllPage]
})
export class ObjectifAllPageModule {}
