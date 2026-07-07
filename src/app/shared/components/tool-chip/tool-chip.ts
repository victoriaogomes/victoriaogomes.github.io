import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tool-chip',
  imports: [],
  templateUrl: './tool-chip.html',
  styleUrl: './tool-chip.sass',
})
export class ToolChip {
  @Input({required: true}) title!: string;
  @Input() textColor!: string;
  @Input() backgroundColor!: string;
  @Input() icon!: string;
  @Input() fontSize!: string;
}
