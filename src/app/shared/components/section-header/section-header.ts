import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  imports: [],
  templateUrl: './section-header.html',
  styleUrl: './section-header.sass',
})
export class SectionHeader {
  @Input() number!: string;
  @Input() title!: string;
}
