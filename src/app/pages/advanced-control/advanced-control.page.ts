import { Component, OnInit } from '@angular/core';
import { ControlHubService } from 'src/app/shared/hub/control-hub.service';
import { Observable } from 'rxjs';
import { VehicleConnectionState } from 'src/app/models/vehicleConnectionState';
import { VehicleControlCommands } from 'src/app/models/vehicleControlCommands';

@Component({
  selector: 'app-advanced-control',
  templateUrl: './advanced-control.page.html',
  styleUrls: ['./advanced-control.page.scss'],
})
export class AdvancedControlPage implements OnInit {

  vehicleConnectionState: Observable<VehicleConnectionState>;
  ConnectionState = VehicleConnectionState;
  distanceMeasurement: Observable<number>;

  constructor(
    private vehicleControlHubService: ControlHubService) { }

  ngOnInit(): void {
    this.vehicleConnectionState = this.vehicleControlHubService.vehicleConnectionState;

    this.distanceMeasurement = this.vehicleControlHubService.distanceMeasurement;
  }

  moveForward() {
    this.vehicleControlHubService.sendCommand(VehicleControlCommands.GoForward);
  }

  moveForwardLeft() {
    this.vehicleControlHubService.sendCommand(VehicleControlCommands.GoLeftForward);
  }

  moveForwardRight() {
    this.vehicleControlHubService.sendCommand(VehicleControlCommands.GoRightForward);
  }

  moveBackward() {
    this.vehicleControlHubService.sendCommand(VehicleControlCommands.GoBackward);
  }

  moveBackwardLeft() {
    this.vehicleControlHubService.sendCommand(VehicleControlCommands.GoLeftBackward);
  }

  moveBackwardRight() {
    this.vehicleControlHubService.sendCommand(VehicleControlCommands.GoRightBackward);
  }

  stop() {
    this.vehicleControlHubService.sendCommand(VehicleControlCommands.Stop);
  }

  stopRight() {
    this.vehicleControlHubService.sendCommand(VehicleControlCommands.StopRight);
  }

  stopLeft() {
    this.vehicleControlHubService.sendCommand(VehicleControlCommands.StopLeft);
  }

  connectToVehicle() {
    this.vehicleControlHubService.start();
  }
}
