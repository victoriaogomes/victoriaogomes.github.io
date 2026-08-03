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
  icon: InputSignal<IconDefinition> = input.required<IconDefinition>();
  backgroundColor: InputSignal<string> = input<string>('#eff6ff');
  iconColor: InputSignal<string> = input<string>('#2b52ae');
}
