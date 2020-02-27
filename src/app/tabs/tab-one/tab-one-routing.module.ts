import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabOnePage } from './tab-one.page';

const routes: Routes = [
  {
    path: '',
    component: TabOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabOnePageRoutingModule {}
