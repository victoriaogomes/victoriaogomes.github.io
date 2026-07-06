import { Component } from '@angular/core';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { TranslatePipe } from "@ngx-translate/core";
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGoogleScholar, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { SafeHtmlPipe } from '../shared/pipes/safe-html.pipe';

@Component({
  selector: 'app-intro',
  imports: [
    FaIconComponent,
    TranslatePipe,
    SafeHtmlPipe
  ],
  templateUrl: './intro.html',
  styleUrl: './intro.sass',
})
export class Intro {
  protected readonly faLocationDot = faLocationDot;
  protected readonly faEnvelope = faEnvelope;
  protected readonly faGithub = faGithub;
  protected readonly faLinkedin = faLinkedin;
  protected readonly faGoogleScholar = faGoogleScholar;
}
