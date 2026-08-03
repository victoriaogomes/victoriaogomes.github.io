import { Component, input, InputSignal } from '@angular/core';
import {FaIconComponent, IconDefinition} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-icon-badge',
  imports: [
    FaIconComponent
  ],
  templateUrl: './icon-badge.html',
  styleUrl: './icon-badge.sass',
})
export class IconBadge {
  readonly icon: InputSignal<IconDefinition> = input.required<IconDefinition>();
  readonly backgroundColor: InputSignal<string> = input<string>('#eff6ff');
  readonly iconColor: InputSignal<string> = input<string>('#2b52ae');
}
