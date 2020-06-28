import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControlService {
  private urlAddress = 'http://192.168.1.90:5000';

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
