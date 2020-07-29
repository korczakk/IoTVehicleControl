import { Component, OnInit, OnDestroy } from '@angular/core';
import { ControlHubService } from 'src/app/shared/hub/control-hub.service';
import { VehicleControlCommands } from 'src/app/models/vehicleControlCommands';
import { VehicleConnectionState } from 'src/app/models/vehicleConnectionState';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-basic-control',
  templateUrl: './basic-control.page.html',
  styleUrls: ['./basic-control.page.scss'],
})
export class BasicControlPage implements OnInit, OnDestroy {

  vehicleConnectionState: Observable<VehicleConnectionState>;
  ConnectionState = VehicleConnectionState;
  distanceMeasurement: Observable<number>;
  videoCardVisible = false;

  private videoFeedOriginalUrl = 'http://192.168.1.90:8080/stream/video.mjpeg';
  public videoFeedUrl = '';

  constructor(
    private vehicleControlHubService: ControlHubService) { }

  ngOnDestroy(): void {
    this.vehicleControlHubService.stopConnection();
  }

  ngOnInit(): void {
    this.vehicleControlHubService.InitiateConnection();
    this.vehicleConnectionState = this.vehicleControlHubService.vehicleConnectionState;

    this.distanceMeasurement = this.vehicleControlHubService.distanceMeasurement;
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

  toggleCameraView() {
    if (this.videoCardVisible) {
      this.videoFeedUrl = '';
      setTimeout(() => {
        this.videoCardVisible = false;
      }, 10); 
    } else {
      this.videoFeedUrl = this.videoFeedOriginalUrl;
      setTimeout(() => {
        this.videoCardVisible = true;
      }, 10); 
    }

  }
}
