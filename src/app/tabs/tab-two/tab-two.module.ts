import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabTwoPageRoutingModule } from './tab-two-routing.module';

import { TabTwoPage } from './tab-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabTwoPageRoutingModule
  ],
  declarations: [TabTwoPage]
})
export class TabTwoPageModule {}
