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

  public vehicleConnectionState = new BehaviorSubject<VehicleConnectionState>(VehicleConnectionState.Connecting);
  public distanceMeasurement = new BehaviorSubject<number>(0);

  private hubConnection: signalR.HubConnection = new signalR.HubConnectionBuilder()
    .withUrl(environment.vehicleControlHubUrl)
    .withAutomaticReconnect([0, 5000])
    .build();
  private streamSubscription: signalR.ISubscription<any>;

  public async InitiateConnection() {
    await this.start();

    this.hubConnection.onclose(() => this.vehicleConnectionState.next(VehicleConnectionState.DisConnected));
    this.hubConnection.onreconnecting(() => this.vehicleConnectionState.next(VehicleConnectionState.Reconnecting));
    this.hubConnection.onreconnected(() => {
      this.vehicleConnectionState.next(VehicleConnectionState.Connected);
      this.getMeasurementStream();
    });
  }

  public async stopConnection() {
    await this.hubConnection.stop();
    this.streamSubscription.dispose();
  }

  public async sendCommand(command: VehicleControlCommands) {
    try {
      await this.hubConnection.invoke(command)
    } catch (error) {
      console.error(error);
    }
  }

  public async start() {
    try {
      await this.hubConnection.start();
      this.vehicleConnectionState.next(VehicleConnectionState.Connected);
      
      this.getMeasurementStream();
    } catch (err) {
      setTimeout(() => this.start(), 3000)
    }
  }

  private getMeasurementStream() {
    this.streamSubscription = this.hubConnection
      .stream('GetDistanceMeasurement')
      .subscribe(this.getStreamSubscriber());
  }

  private getStreamSubscriber(): signalR.IStreamSubscriber<any> {
    return {
      next: (value: number) => this.distanceMeasurement.next(value),
      error: (err) => console.error(err),
      complete: () => { }
    };
  }
}
