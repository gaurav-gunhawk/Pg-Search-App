import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabThreePageRoutingModule } from './tab-three-routing.module';

import { TabThreePage } from './tab-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabThreePageRoutingModule
  ],
  declarations: [TabThreePage]
})
export class TabThreePageModule {}
