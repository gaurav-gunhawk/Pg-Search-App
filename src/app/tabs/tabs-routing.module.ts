import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [

  {
    path: '',
    component: TabsPage,

    children: [
      {
        path: 'tab-two',
        loadChildren: () => import('./tab-two/tab-two.module').then( m => m.TabTwoPageModule)
      },      
      
      {
        path: 'tab-one',
        loadChildren: () => import('./tab-one/tab-one.module').then( m => m.TabOnePageModule)
      },
    
      {
        path: 'tab-three',
        loadChildren: () => import('./tab-three/tab-three.module').then( m => m.TabThreePageModule)
      }
    ]},
  
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {
}
