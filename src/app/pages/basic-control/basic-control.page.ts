import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/shared/services/control.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-basic-control',
  templateUrl: './basic-control.page.html',
  styleUrls: ['./basic-control.page.scss'],
})
export class BasicControlPage {

  constructor(private controlService: ControlService) { }

  moveForward() {
    this.controlService.moveForward();
    console.log('click');
  }

  moveBackward() {
    this.controlService.moveBackward();
  }

  turnLeft() {
    this.controlService.turnLeft();
  }

  turnRight() {
    this.controlService.turnRight();
  }

  stop() {
    this.controlService.stop();
  }
}
