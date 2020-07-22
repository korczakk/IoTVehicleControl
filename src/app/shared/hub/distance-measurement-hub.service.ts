import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DistanceMeasurementHubService {

  public distanceMeasurement = new BehaviorSubject<number>(0);

  private distanceMeasurementHub = new signalR.HubConnectionBuilder()
    .withUrl(environment.distanceMeasurementHubUrl)
    .withAutomaticReconnect()
    .build();
  private streamSubscription: signalR.ISubscription<any>;

  public async InitiateConnection() {
    await this.startConnection();

    this.distanceMeasurementHub.onreconnected(() => this.getMeasurementStream());
    this.distanceMeasurementHub.onclose(() => this.startConnection());
  }

  public closeConnection() {
    this.streamSubscription.dispose();
    this.distanceMeasurementHub.stop();
  }

  private getStreamSubscriber(): signalR.IStreamSubscriber<any> {
    return {
      next: (value: number) => this.distanceMeasurement.next(value),
      error: (err) => console.error(err),
      complete: () => { }
    };
  }

  private async startConnection() {
    try {
      await this.distanceMeasurementHub.start();

      this.getMeasurementStream();
    } catch (error) {
      setTimeout(() => this.startConnection(), 3000);
    }
  }

  private getMeasurementStream() {
    this.streamSubscription = this.distanceMeasurementHub
      .stream('GetDistanceMeasurement')
      .subscribe(this.getStreamSubscriber());
  }
}
