import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-section-header',
  imports: [],
  templateUrl: './section-header.html',
  styleUrl: './section-header.sass',
})
export class SectionHeader {
  readonly title: InputSignal<string> = input.required<string>();
  readonly number: InputSignal<string> = input.required<string>();
}
