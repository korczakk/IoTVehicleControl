import { Component, Input, Output, EventEmitter } from '@angular/core';
import { VehicleConnectionState } from 'src/app/models/vehicleConnectionState';

@Component({
  selector: 'app-vehicle-connection-status',
  templateUrl: './vehicle-connection-status.component.html',
  styleUrls: ['./vehicle-connection-status.component.scss'],
})
export class VehicleConnectionStatusComponent {

  @Input() connectionState: VehicleConnectionState;
  @Output() connectToVehicle = new EventEmitter();

  VehicleConnectionState = VehicleConnectionState;

  connectClick() {
    this.connectToVehicle.emit();
  }

}
