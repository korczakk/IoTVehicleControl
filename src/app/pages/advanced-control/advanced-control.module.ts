import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvancedControlPageRoutingModule } from './advanced-control-routing.module';

import { AdvancedControlPage } from './advanced-control.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvancedControlPageRoutingModule
  ],
  declarations: [AdvancedControlPage]
})
export class AdvancedControlPageModule {}
