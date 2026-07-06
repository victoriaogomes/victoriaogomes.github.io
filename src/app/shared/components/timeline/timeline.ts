import {Component, Input} from '@angular/core';
import {TimelineItem} from './timeline-item';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-timeline',
  imports: [
    TranslatePipe
  ],
  templateUrl: './timeline.html',
  styleUrl: './timeline.sass',
})
export class Timeline {
  @Input() items: TimelineItem[] = [];
}
