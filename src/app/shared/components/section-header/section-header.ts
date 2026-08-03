import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-section-header',
  imports: [],
  templateUrl: './section-header.html',
  styleUrl: './section-header.sass',
})
export class SectionHeader {
  title: InputSignal<string> = input.required<string>();
  number: InputSignal<string> = input.required<string>();
}
