import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-tool-chip',
  imports: [],
  templateUrl: './tool-chip.html',
  styleUrl: './tool-chip.sass',
})
export class ToolChip {
  title: InputSignal<string> = input.required<string>();
  textColor: InputSignal<string | undefined> = input<string>();
  backgroundColor: InputSignal<string | undefined> = input<string>();
  icon: InputSignal<string | undefined> = input<string>();
  fontSize: InputSignal<string | undefined> = input<string>();
  fontWeight: InputSignal<string> = input<string>("600");
  hoverAnimation: InputSignal<boolean> = input<boolean>(false);
}
