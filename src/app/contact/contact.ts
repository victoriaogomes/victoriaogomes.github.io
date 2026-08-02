import { Component } from '@angular/core';
import { SectionHeader } from "../shared/components/section-header/section-header";
import { TranslatePipe } from "@ngx-translate/core";
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  imports: [
    SectionHeader,
    TranslatePipe,
    FaIconComponent
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.sass',
})
export class Contact {

  protected readonly faEnvelope = faEnvelope;
  protected readonly faChevronRight = faChevronRight;
}
