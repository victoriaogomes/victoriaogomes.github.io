import {Component, Input} from '@angular/core';
import {IconBadge} from '../icon-badge/icon-badge';
import {IconDefinition} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-infocard',
  templateUrl: './infocard.html',
  styleUrl: './infocard.sass',
  imports: [
    IconBadge
  ]
})
export class Infocard {
  @Input({required: true}) title!: string;
  @Input() subtitle: string | undefined;
  @Input() displayDivider: boolean = true;

  @Input() icon!: IconDefinition;
}
