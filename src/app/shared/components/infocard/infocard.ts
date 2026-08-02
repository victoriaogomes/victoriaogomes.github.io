import { Component, Input } from '@angular/core';
import { IconBadge } from '../icon-badge/icon-badge';
import { FaIconComponent, IconDefinition } from '@fortawesome/angular-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-infocard',
  templateUrl: './infocard.html',
  styleUrl: './infocard.sass',
  imports: [
    IconBadge,
    FaIconComponent
  ]
})
export class Infocard {
  @Input() title!: string;
  @Input() subtitle: string | undefined;
  @Input() displayDivider: boolean = true;
  @Input() externalLink!: string;
  @Input() icon!: IconDefinition;
  @Input() hoverAnimation: boolean = false;
  @Input() border: boolean = true;

  protected readonly faArrowUpRightFromSquare = faArrowUpRightFromSquare;

  openLink() {
    if (this.externalLink) {
      window.open(this.externalLink, '_blank', 'noopener,noreferrer');
    }
  }
}
