import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-tool-chip',
  imports: [],
  templateUrl: './tool-chip.html',
  styleUrl: './tool-chip.sass',
})
export class ToolChip {
  readonly title: InputSignal<string> = input.required<string>();
  readonly textColor: InputSignal<string | undefined> = input<string>();
  readonly backgroundColor: InputSignal<string | undefined> = input<string>();
  readonly icon: InputSignal<string | undefined> = input<string>();
  readonly fontSize: InputSignal<string | undefined> = input<string>();
  readonly fontWeight: InputSignal<string> = input<string>("600");
  readonly hoverAnimation: InputSignal<boolean> = input<boolean>(false);
}
