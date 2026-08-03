import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { SectionHeader } from "../shared/components/section-header/section-header";
import { TranslatePipe, TranslateService } from "@ngx-translate/core";
import { PublicationList } from './component/publication-list/publication-list';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-publications',
  imports: [
    SectionHeader,
    TranslatePipe,
    PublicationList,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogClose
  ],
  templateUrl: './publications.html',
  styleUrl: './publications.sass',
})
export class Publications {
  private readonly translateService = inject(TranslateService);
  private readonly graduatePublicationListKey: string = "publications.graduate.publicationList";
  private readonly undergraduatePublicationListKey: string = "publications.undergraduate.publicationList";
  private readonly dialog = inject(MatDialog);

  @ViewChild('publicationsDialog')
  private publicationsDialog!: TemplateRef<unknown>;

  protected publicationSections = [
    {
      title: 'publications.graduate.title',
      subtitle: 'publications.graduate.subtitle',
      publications: toSignal(
        this.translateService.stream(this.graduatePublicationListKey).pipe(
          map(publications => this.groupByYear(publications))
        ),
        {initialValue: null}
      )
    },
    {
      title: 'publications.undergraduate.title',
      subtitle: 'publications.undergraduate.subtitle',
      publications: toSignal(
        this.translateService.stream(this.undergraduatePublicationListKey).pipe(
          map(publications => this.groupByYear(publications))
        ),
        {initialValue: null}
      )
    }
  ];

  protected selectedPublicationSection: any = null;

  protected getPublicationPreview(publicationList: any) {
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

  private groupByYear(publications: any[]) {
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

  protected showPublications(section: any): void {
    this.selectedPublicationSection = section;

    this.dialog.open(this.publicationsDialog, {
      width: '900px',
      maxWidth: '95vw',
    });
  }

  protected getPublicationListSize(publicationList: any) {
    return publicationList.reduce((publicationCount: number, publicationGroup: any) => {
      publicationCount += publicationGroup.publications.length;

      return publicationCount;
    }, 0);
  }

}
