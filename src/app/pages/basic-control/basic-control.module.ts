import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasicControlPageRoutingModule } from './basic-control-routing.module';

import { BasicControlPage } from './basic-control.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasicControlPageRoutingModule
  ],
  declarations: [BasicControlPage]
})
export class BasicControlPageModule {}
