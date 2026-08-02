import { Component, computed, OnInit, signal } from '@angular/core';
import { SectionHeader } from "../shared/components/section-header/section-header";
import { TranslatePipe, TranslateService } from "@ngx-translate/core";
import { SafeHtmlPipe } from '../shared/pipes/safe-html.pipe';
import { PublicationList } from './component/publication-list/publication-list';

@Component({
  selector: 'app-publications',
  imports: [
    SectionHeader,
    TranslatePipe,
    SafeHtmlPipe,
    PublicationList
  ],
  templateUrl: './publications.html',
  styleUrl: './publications.sass',
})
export class Publications implements OnInit {
  protected readonly graduatePublicationListKey: string = "publications.graduate.publicationList";
  protected readonly undergraduatePublicationListKey: string = "publications.undergraduate.publicationList";

  protected graduatePublicationList = signal<Record<string, any>[]>([]);
  protected undergraduatePublicationList = signal<Record<string, any>[]>([]);

  publicationSections = computed(() => [
    {
      title: 'publications.graduate.title',
      subtitle: 'publications.graduate.subtitle',
      publications: this.graduatePublicationList(),
    },
    {
      title: 'publications.undergraduate.title',
      subtitle: 'publications.undergraduate.subtitle',
      publications: this.undergraduatePublicationList(),
    }
  ]);

  selectedPublicationSection: any = null;

  constructor(private translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.translateService
      .get([this.graduatePublicationListKey, this.undergraduatePublicationListKey])
      .subscribe(publicationList => {
        this.graduatePublicationList.set(this.groupByYear(publicationList[this.graduatePublicationListKey]));
        this.undergraduatePublicationList.set(this.groupByYear(publicationList[this.undergraduatePublicationListKey]));
      });
  }

  getPublicationPreview(publicationList: any) {
    let remaining = 2;

    return publicationList
      .map((group: any) => {
        const publications = group.publications.slice(0, remaining);
        remaining -= publications.length;

        return {
          year: group.year,
          publications
        };
      })
      .filter((group: { publications: string | any[]; }) => group.publications.length > 0);
  }

  groupByYear(publications: any[]) {
    const groups = publications.reduce((groups, publication) => {
      const year = publication.year;

      if (!groups[year]) {
        groups[year] = [];
      }

      groups[year].push(publication);

      return groups;
    }, {});

    return Object.entries(groups)
      .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
      .map(([year, publications]) => ({
        year,
        publications
      }));
  }

  openPublications(section: any) {
    this.selectedPublicationSection = section;
  }

  closePublications() {
    this.selectedPublicationSection = null;
  }

  getPublicationListSize(publicationList: any) {
    return publicationList.reduce((publicationCount: number, publicationGroup: any) => {
      publicationCount += publicationGroup.publications.length;

      return publicationCount;
    }, 0);
  }

}
