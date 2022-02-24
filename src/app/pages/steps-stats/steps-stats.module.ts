import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StepsStatsPageRoutingModule } from './steps-stats-routing.module';

import { StepsStatsPage } from './steps-stats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StepsStatsPageRoutingModule
  ],
  declarations: [StepsStatsPage]
})
export class StepsStatsPageModule {}
