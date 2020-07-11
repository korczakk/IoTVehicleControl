import { Component, OnInit, OnDestroy } from '@angular/core';
import { ControlHubService } from 'src/app/shared/hub/control-hub.service';
import { VehicleControlCommands } from 'src/app/models/vehicleControlCommands';

@Component({
  selector: 'app-basic-control',
  templateUrl: './basic-control.page.html',
  styleUrls: ['./basic-control.page.scss'],
})
export class BasicControlPage implements OnInit, OnDestroy {

  constructor(private hubService: ControlHubService) { }

  ngOnDestroy(): void {
    this.hubService.stopConnection();
  }
  
  ngOnInit(): void {
    this.hubService.startConnection();
  }

  moveForward() {
    this.hubService.sendCommand(VehicleControlCommands.GoForward);
  }

  moveBackward() {
    this.hubService.sendCommand(VehicleControlCommands.GoBackward);
  }

  turnLeft() {
    this.hubService.sendCommand(VehicleControlCommands.TurnLeft);
  }

  turnRight() {
    this.hubService.sendCommand(VehicleControlCommands.TurnRight);
  }

  stop() {
    this.hubService.sendCommand(VehicleControlCommands.Stop);
  }
}
