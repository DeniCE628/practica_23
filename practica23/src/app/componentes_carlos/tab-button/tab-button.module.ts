import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabButtonPageRoutingModule } from './tab-button-routing.module';

import { TabButtonPage } from './tab-button.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabButtonPageRoutingModule
  ],
  declarations: [TabButtonPage]
})
export class TabButtonPageModule {}
