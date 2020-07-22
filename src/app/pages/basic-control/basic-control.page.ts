import { Component, OnInit, OnDestroy } from '@angular/core';
import { ControlHubService } from 'src/app/shared/hub/control-hub.service';
import { VehicleControlCommands } from 'src/app/models/vehicleControlCommands';
import { VehicleConnectionState } from 'src/app/models/vehicleConnectionState';
import { Observable } from 'rxjs';
import { DistanceMeasurementHubService } from 'src/app/shared/hub/distance-measurement-hub.service';

@Component({
  selector: 'app-basic-control',
  templateUrl: './basic-control.page.html',
  styleUrls: ['./basic-control.page.scss'],
})
export class BasicControlPage implements OnInit, OnDestroy {

  vehicleConnectionState: Observable<VehicleConnectionState>;
  ConnectionState = VehicleConnectionState;
  distanceMeasurement: Observable<number>;

  constructor(
    private vehicleControlHubService: ControlHubService,
    private distanceHubService: DistanceMeasurementHubService) { }

  ngOnDestroy(): void {
    this.vehicleControlHubService.stopConnection();
    this.distanceHubService.closeConnection();
  }
  
  ngOnInit(): void {
    this.vehicleControlHubService.InitiateConnection();
    this.vehicleConnectionState = this.vehicleControlHubService.vehicleConnectionState;

    this.distanceHubService.InitiateConnection();
    this.distanceMeasurement = this.distanceHubService.distanceMeasurement;
  }

  moveForward() {
    this.vehicleControlHubService.sendCommand(VehicleControlCommands.GoForward);
  }

  moveBackward() {
    this.vehicleControlHubService.sendCommand(VehicleControlCommands.GoBackward);
  }

  turnLeft() {
    this.vehicleControlHubService.sendCommand(VehicleControlCommands.TurnLeft);
  }

  turnRight() {
    this.vehicleControlHubService.sendCommand(VehicleControlCommands.TurnRight);
  }

  stop() {
    this.vehicleControlHubService.sendCommand(VehicleControlCommands.Stop);
  }

  connectToVehicle() {
    this.vehicleControlHubService.start();
  }
}
