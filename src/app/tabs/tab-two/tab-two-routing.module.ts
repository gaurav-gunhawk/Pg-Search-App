import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabTwoPage } from './tab-two.page';

const routes: Routes = [
  {
    path: '',
    component: TabTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabTwoPageRoutingModule {}
