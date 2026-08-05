import { Component, input, InputSignal } from '@angular/core';
import { PublicationDetail } from '../publication-detail/publication-detail';

@Component({
  selector: 'app-publication-list',
  imports: [
    PublicationDetail
  ],
  templateUrl: './publication-list.html',
  styleUrl: './publication-list.sass',
})
export class PublicationList {
  readonly publicationList: InputSignal<Record<string, any>[]> = input.required<Record<string, any>[]>();
}
