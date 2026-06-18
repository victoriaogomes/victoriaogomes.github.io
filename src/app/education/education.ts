import { Component } from '@angular/core';
import {TimelineItem} from '../shared/timeline/timeline-item';
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import {Infocard} from '../shared/infocard/infocard';
import {Timeline} from '../shared/timeline/timeline';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-education',
  imports: [
    Infocard,
    Timeline,
    TranslatePipe
  ],
  templateUrl: './education.html',
  styleUrl: './education.sass',
})
export class Education {
  protected readonly faGraduationCap = faGraduationCap;

  timelineItems: TimelineItem[] = [
    {
      title: 'PhD in Computer Science',
      subtitle: "",
      description: 'Virginia Commonwealth University',
      startDate: "",
    },
    {
      title: "B.S. in Computer Engineering",
      subtitle: "",
      description: 'State University of Feira de Santana',
      startDate: "2016",
      endDate: "2022",
    }
  ];
}
