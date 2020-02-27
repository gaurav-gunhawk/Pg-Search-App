import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';

import { AgmCoreModule} from '@agm/core' ;


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA957vVnv63Z-AIzaSyDcSZa-loDg3B4Tvp12Q6NUS-fiIbCOvOg'
    })
  ],
  
  declarations: [TabsPage]
})
export class TabsPageModule {}
