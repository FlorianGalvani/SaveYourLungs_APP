import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StepsStatsPage } from './steps-stats.page';

const routes: Routes = [
  {
    path: '',
    component: StepsStatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StepsStatsPageRoutingModule {}
