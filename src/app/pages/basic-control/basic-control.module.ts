import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasicControlPageRoutingModule } from './basic-control-routing.module';

import { BasicControlPage } from './basic-control.page';
import { VehicleConnectionStatusComponent } from 'src/app/shared/components/vehicle-connection-status/vehicle-connection-status.component';
import { CameraViewComponent } from 'src/app/shared/components/camera-view/camera-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasicControlPageRoutingModule
  ],
  declarations: [
    BasicControlPage,
    VehicleConnectionStatusComponent,
    CameraViewComponent
  ]
})
export class BasicControlPageModule {}
