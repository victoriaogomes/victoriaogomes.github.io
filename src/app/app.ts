import { Component } from '@angular/core';
import { Navbar } from './shared/ui/navbar/navbar';
import { AboutMe } from './about-me/about-me';
import { Intro } from './intro/intro';
import { Background } from './background/background';
import { TechnicalSkills } from './technical-skills/technical-skills';
import { Projects } from './projects/projects';
import { Research } from './research/research';
import { Publications } from './publications/publications';
import { Contact } from './contact/contact';
import { LanguageService } from './services/language-service';

@Component({
  selector: 'app-root',
  imports: [Navbar, AboutMe, Intro, Background, TechnicalSkills, Projects, Research, Publications, Contact],
  templateUrl: './app.html',
  styleUrl: './app.sass'
})
export class App {
  protected readonly currentYear = new Date().getFullYear();

  constructor(private languageService: LanguageService) {
    this.languageService.init();
  }
}
