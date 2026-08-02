import { Component, input, InputSignal } from '@angular/core';
import { Infocard } from '../../../shared/components/infocard/infocard';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { ToolChip } from '../../../shared/components/tool-chip/tool-chip';

@Component({
  selector: 'app-publication-detail',
  imports: [
    Infocard,
    ToolChip
  ],
  templateUrl: './publication-detail.html',
  styleUrl: './publication-detail.sass',
})
export class PublicationDetail {
  year: InputSignal<number> = input.required<number>();
  title: InputSignal<string> = input.required<string>();
  enTitle: InputSignal<string | undefined> = input<string>();
  language: InputSignal<string> = input.required<string>();
  authors: InputSignal<string> = input.required<string>();
  venue: InputSignal<string> = input.required<string>();
  topics: InputSignal<string[]> = input.required<string[]>();
  link: InputSignal<string> = input.required<string>();

  protected readonly faArrowUpRightFromSquare = faArrowUpRightFromSquare;
}
