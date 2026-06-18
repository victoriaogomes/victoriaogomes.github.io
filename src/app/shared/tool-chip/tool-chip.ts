import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tool-chip',
  imports: [],
  templateUrl: './tool-chip.html',
  styleUrl: './tool-chip.sass',
})
export class ToolChip {
  @Input() title!: string;
  @Input() icon!: string;
}
