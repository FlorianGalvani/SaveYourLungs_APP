import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObjectifEmptyPageRoutingModule } from './objectif-empty-routing.module';

import { ObjectifEmptyPage } from './objectif-empty.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObjectifEmptyPageRoutingModule
  ],
  declarations: [ObjectifEmptyPage]
})
export class ObjectifEmptyPageModule {}
