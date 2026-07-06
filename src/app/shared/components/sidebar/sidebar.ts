import {Component} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {faLinkedin, faGithub, faGoogleScholar} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faLocationDot, faCode, faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.sass'],
  imports: [
    TranslatePipe,
    FaIconComponent
  ]
})
export class Sidebar {
  protected readonly faLocationDot = faLocationDot;
  protected readonly faEnvelope = faEnvelope;
  protected readonly faLinkedin = faLinkedin;
  protected readonly faGithub = faGithub;
  protected readonly faUser = faUser;
  protected readonly faGoogleScholar = faGoogleScholar;
  protected readonly faCode = faCode;
  protected readonly faGraduationCap = faGraduationCap;
}
