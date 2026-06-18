import {Component, OnInit} from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {Infocard} from '../shared/infocard/infocard';
import {TimelineItem} from '../shared/timeline/timeline-item';
import {Timeline} from '../shared/timeline/timeline';
import {faGraduationCap, faUpRightAndDownLeftFromCenter, faBriefcase} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {Skills} from './components/skills/skills';

@Component({
  selector: 'app-about',
  imports: [
    TranslatePipe,
    Infocard,
    Timeline,
    FaIconComponent,
    Skills
  ],
  templateUrl: './about.html',
  styleUrl: './about.sass',
})
export class About implements OnInit {
  protected readonly faGraduationCap = faGraduationCap;
  protected readonly faUser = faUser;
  protected readonly faUpRightAndDownLeftFromCenter = faUpRightAndDownLeftFromCenter;
  protected readonly faBriefCase = faBriefcase;
  protected readonly educationListKey: string = 'sections.about.careerOverview.education.list';
  protected readonly professionalExperienceListKey: string = 'sections.about.careerOverview.experience.list';
  protected educationTimelineItems: TimelineItem[] = [];
  protected professionalExperienceTimelineItems: TimelineItem[] = [];

  constructor(
    private translateService: TranslateService
  ) {
  }


  ngOnInit(): void {
    this.translateService
      .get([this.educationListKey, this.professionalExperienceListKey])
      .subscribe(translations => {
        // @ts-ignore
        translations[this.professionalExperienceListKey].forEach(experience => {
          this.professionalExperienceTimelineItems.push({
            title: experience.title,
            description: experience.company,
            startDate: experience.startDate,
            endDate: experience.endDate,
            location: experience.location
          });
        });

        // @ts-ignore
        translations[this.educationListKey].forEach(education => {
          this.educationTimelineItems.push({
            title: education.title,
            subtitle: education.subtitle,
            description: education.university,
            startDate: education.startDate,
            endDate: education.endDate,
            location: education.location
          });
        });
      });
  }
}
