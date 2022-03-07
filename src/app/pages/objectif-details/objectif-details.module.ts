import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObjectifDetailsPageRoutingModule } from './objectif-details-routing.module';

import { ObjectifDetailsPage } from './objectif-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObjectifDetailsPageRoutingModule
  ],
  declarations: [ObjectifDetailsPage]
})
export class ObjectifDetailsPageModule {}
