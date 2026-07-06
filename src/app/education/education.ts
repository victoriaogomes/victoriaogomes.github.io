import {Component, OnInit} from '@angular/core';
import {TimelineItem} from '../shared/components/timeline/timeline-item';
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import {faSistrix} from '@fortawesome/free-brands-svg-icons';
import {Infocard} from '../shared/components/infocard/infocard';
import {Timeline} from '../shared/components/timeline/timeline';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

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
export class Education implements OnInit {
  protected readonly faGraduationCap = faGraduationCap;
  protected readonly faSistrix = faSistrix;
  protected readonly educationListKey: string = 'sections.about.careerOverview.education.list';
  protected readonly publicationsListKey: string = 'sections.educationAndResearch.research.publications';
  protected educationTimelineItems: TimelineItem[] = [];
  protected publications: any;
  protected years: string[] = [];

  constructor(
    private translateService: TranslateService
  ) {
  }

  ngOnInit(): void {
    this.translateService
      .get([this.educationListKey, this.publicationsListKey])
      .subscribe(translations => {
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

          this.publications = translations[this.publicationsListKey];
          this.years = Object.keys(this.publications).sort().reverse();
        }
      );
  }


}
