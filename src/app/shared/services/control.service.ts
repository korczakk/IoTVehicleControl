import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ControlService {
  private urlAddress = environment.vehicleControlUrl;

  constructor(private http: HttpClient) { }

  moveForward() {
    this.http.get(`${this.urlAddress}/goforward`).toPromise();
  }

  moveBackward() {
    this.http.get(`${this.urlAddress}/goBackward`).toPromise();
  }

  turnLeft() {
    this.http.get(`${this.urlAddress}/turnLeft`).toPromise();
  }

  turnRight() {
    this.http.get(`${this.urlAddress}/turnRight`).toPromise();
  }

  stop() {
    this.http.get(`${this.urlAddress}/stop`).toPromise();
  }
}
