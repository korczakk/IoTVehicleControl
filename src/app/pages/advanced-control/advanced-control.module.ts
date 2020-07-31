import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdvancedControlPageRoutingModule } from './advanced-control-routing.module';

import { AdvancedControlPage } from './advanced-control.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdvancedControlPageRoutingModule,
    SharedModule
  ],
  declarations: [AdvancedControlPage,
  ]
})
export class AdvancedControlPageModule { }
