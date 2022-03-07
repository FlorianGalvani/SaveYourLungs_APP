import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObjectifDetailsPage } from './objectif-details.page';

const routes: Routes = [
  {
    path: '',
    component: ObjectifDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObjectifDetailsPageRoutingModule {}
