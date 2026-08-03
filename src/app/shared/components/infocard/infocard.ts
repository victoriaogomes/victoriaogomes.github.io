import { Component, input, InputSignal } from '@angular/core';
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
  title: InputSignal<string> = input.required<string>();
  subtitle: InputSignal<string | undefined> = input<string>();
  displayDivider: InputSignal<boolean> = input<boolean>(true);
  externalLink: InputSignal<string | undefined> = input<string>();
  icon: InputSignal<IconDefinition | undefined> = input<IconDefinition>();
  hoverAnimation: InputSignal<boolean> = input<boolean>(false);
  border: InputSignal<boolean> = input<boolean>(true);

  protected readonly faArrowUpRightFromSquare = faArrowUpRightFromSquare;

  openLink() {
    if (this.externalLink()) {
      window.open(this.externalLink(), '_blank', 'noopener,noreferrer');
    }
  }
}
