import { Component, input, InputSignal } from '@angular/core';
import { Infocard } from '../../../shared/components/infocard/infocard';
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
  readonly title: InputSignal<string> = input.required<string>();
  readonly enTitle: InputSignal<string | undefined> = input<string>();
  readonly language: InputSignal<string> = input.required<string>();
  readonly authors: InputSignal<string> = input.required<string>();
  readonly venue: InputSignal<string> = input.required<string>();
  readonly link: InputSignal<string> = input.required<string>();
}
