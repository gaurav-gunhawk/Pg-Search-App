import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabThreePage } from './tab-three.page';

const routes: Routes = [
  {
    path: '',
    component: TabThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabThreePageRoutingModule {}
