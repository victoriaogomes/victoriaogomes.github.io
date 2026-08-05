import { Component, inject } from '@angular/core';
import { faBars, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { TranslatePipe } from '@ngx-translate/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { LanguageService } from '../../../services/language-service';

@Component({
  selector: 'app-navbar',
  imports: [
    TranslatePipe,
    FaIconComponent,
    MatButtonModule, MatMenuModule
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.sass',
})
export class Navbar {
  protected isMenuOpen: boolean = false;
  protected readonly faBars = faBars;

  protected readonly navItems = [
    { href: '#about', key: 'navbar.about' },
    { href: '#background', key: 'navbar.background' },
    { href: '#technical-skills', key: 'navbar.technical-skills' },
    { href: '#projects', key: 'navbar.projects' },
    { href: '#research', key: 'navbar.research' },
    { href: '#publications', key: 'navbar.publications' },
    { href: '#contact', key: 'navbar.contact' }
  ];

  protected readonly languageService = inject(LanguageService);
  protected readonly faGlobe = faGlobe;
}
