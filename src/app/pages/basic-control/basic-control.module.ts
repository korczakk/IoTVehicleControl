import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BasicControlPageRoutingModule } from './basic-control-routing.module';

import { BasicControlPage } from './basic-control.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BasicControlPageRoutingModule,
    SharedModule
  ],
  declarations: [
    BasicControlPage,
  ]
})
export class BasicControlPageModule {}
