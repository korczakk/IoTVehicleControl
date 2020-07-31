import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvancedControlPageRoutingModule } from './advanced-control-routing.module';

import { AdvancedControlPage } from './advanced-control.page';
import { VehicleConnectionStatusComponent } from 'src/app/shared/components/vehicle-connection-status/vehicle-connection-status.component';
import { CameraViewComponent } from 'src/app/shared/components/camera-view/camera-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvancedControlPageRoutingModule
  ],
  declarations: [AdvancedControlPage, VehicleConnectionStatusComponent, CameraViewComponent]
})
export class AdvancedControlPageModule { }
