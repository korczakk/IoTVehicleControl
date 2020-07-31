import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraViewComponent } from './components/camera-view/camera-view.component';
import { VehicleConnectionStatusComponent } from './components/vehicle-connection-status/vehicle-connection-status.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [CameraViewComponent, VehicleConnectionStatusComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    CameraViewComponent,
    VehicleConnectionStatusComponent,
    IonicModule
  ]
})
export class SharedModule { }
