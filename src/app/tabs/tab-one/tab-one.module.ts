import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabOnePageRoutingModule } from './tab-one-routing.module';

import { TabOnePage } from './tab-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabOnePageRoutingModule
  ],
  declarations: [TabOnePage]
})
export class TabOnePageModule {}
