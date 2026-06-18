import {Component, Input} from '@angular/core';
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
  @Input({required: true}) icon!: IconDefinition;

  @Input() backgroundColor = '#f2eaff';
  @Input() iconColor = '#8b3dff';
}
