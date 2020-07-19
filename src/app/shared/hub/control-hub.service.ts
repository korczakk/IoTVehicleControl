import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr'
import { VehicleControlCommands } from 'src/app/models/vehicleControlCommands';
import { environment } from 'src/environments/environment'
import { BehaviorSubject } from 'rxjs';
import { VehicleConnectionState } from 'src/app/models/vehicleConnectionState';

@Injectable({
  providedIn: 'root'
})
export class ControlHubService {

  public vehicleConnectionState = new BehaviorSubject<VehicleConnectionState>(VehicleConnectionState.DisConnected);

  private hubConnection: signalR.HubConnection = new signalR.HubConnectionBuilder()
    .withUrl(environment.vehicleControlHubUrl)
    .withAutomaticReconnect()
    .build();

  public async InitiateConnection() {
    await this.start();

    this.hubConnection.onclose(() => this.vehicleConnectionState.next(VehicleConnectionState.DisConnected));
    this.hubConnection.onreconnecting(() => this.vehicleConnectionState.next(VehicleConnectionState.Reconnecting));
    this.hubConnection.onreconnected(() => this.vehicleConnectionState.next(VehicleConnectionState.Reconnected));
  }

  public async stopConnection() {
    await this.hubConnection.stop();
  }

  public sendCommand(command: VehicleControlCommands) {
    this.hubConnection.send(command).then(
      success => console.log(success),
      error => console.log(error)
    );
  }

  public async start() {
    try {
      await this.hubConnection.start();
      this.vehicleConnectionState.next(VehicleConnectionState.Connected);
    } catch (err) {
      setTimeout(() => this.start(), 5000)
    }
  }
}
