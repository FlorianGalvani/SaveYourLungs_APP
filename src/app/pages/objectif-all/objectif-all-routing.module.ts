import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObjectifAllPage } from './objectif-all.page';

const routes: Routes = [
  {
    path: '',
    component: ObjectifAllPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObjectifAllPageRoutingModule {}
