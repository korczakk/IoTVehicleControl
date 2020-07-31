import { Component, OnInit, OnDestroy } from '@angular/core';
import { ControlHubService } from 'src/app/shared/hub/control-hub.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit, OnDestroy {

  constructor(
    private vehicleControlHubService: ControlHubService) { }

  ngOnDestroy(): void {
    this.vehicleControlHubService.stopConnection();
  }

  ngOnInit(): void {
    this.vehicleControlHubService.InitiateConnection();
  }
}
