import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
})
export class VideoComponent {
  @Input({ required: true }) video: any;
}
