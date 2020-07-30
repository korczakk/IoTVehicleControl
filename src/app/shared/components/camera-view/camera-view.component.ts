import { Component } from '@angular/core';

@Component({
  selector: 'app-camera-view',
  templateUrl: './camera-view.component.html',
  styleUrls: ['./camera-view.component.scss'],
})
export class CameraViewComponent {

  videoCardVisible = false;

  private videoFeedOriginalUrl = 'http://192.168.1.90:8080/stream/video.mjpeg';
  public videoFeedUrl = '';
  
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
