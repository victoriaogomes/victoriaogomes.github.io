import { Component, OnInit } from '@angular/core';
import { TimelineItem } from '../shared/components/timeline/timeline-item';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { SectionHeader } from '../shared/components/section-header/section-header';
import { Infocard } from '../shared/components/infocard/infocard';
import { ToolChip } from '../shared/components/tool-chip/tool-chip';

@Component({
  selector: 'app-background',
  imports: [
    TranslatePipe,
    SectionHeader,
    Infocard,
    ToolChip
  ],
  templateUrl: './background.html',
  styleUrl: './background.sass',
})
export class Background implements OnInit {
  protected readonly educationListKey: string = 'background.education.list';
  protected readonly professionalExperienceListKey: string = 'background.experience.list';
  protected professionalExperienceTimelineItems: TimelineItem[] = [];
  protected educationTimelineItems: TimelineItem[] = [];

  constructor(private translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.translateService
      .get([this.educationListKey, this.professionalExperienceListKey])
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

          // @ts-ignore
          translations[this.professionalExperienceListKey].forEach(experience => {
            this.professionalExperienceTimelineItems.push({
              title: experience.title,
              description: experience.company,
              startDate: experience.startDate,
              endDate: experience.endDate,
              location: experience.location,
              details: experience.details
            });
          });
        }
      );
  }
}
