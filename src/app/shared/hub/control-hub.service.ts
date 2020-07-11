import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr'
import { VehicleControlCommands } from 'src/app/models/vehicleControlCommands';

@Injectable({
  providedIn: 'root'
})
export class ControlHubService {

  private hubConnection: signalR.HubConnection;
  
  startConnection() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5000/signalr/vehiclecontrol')
      .build();
      
    this.hubConnection.start().then(
      success => console.log(success),
      error => console.log(error)
    );
  }

  stopConnection() {
    this.hubConnection.stop();
  }

  sendCommand(command: VehicleControlCommands) {
    this.hubConnection.send(command).then(
      success => console.log(success),
      error => console.log(error)
    );
  }
}
