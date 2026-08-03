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
  readonly title: InputSignal<string> = input.required<string>();
  readonly subtitle: InputSignal<string | undefined> = input<string>();
  readonly displayDivider: InputSignal<boolean> = input<boolean>(true);
  readonly externalLink: InputSignal<string | undefined> = input<string>();
  readonly icon: InputSignal<IconDefinition | undefined> = input<IconDefinition>();
  readonly hoverAnimation: InputSignal<boolean> = input<boolean>(false);
  readonly border: InputSignal<boolean> = input<boolean>(true);

  protected readonly faArrowUpRightFromSquare = faArrowUpRightFromSquare;

  protected openLink() {
    if (this.externalLink()) {
      window.open(this.externalLink(), '_blank', 'noopener,noreferrer');
    }
  }
}
