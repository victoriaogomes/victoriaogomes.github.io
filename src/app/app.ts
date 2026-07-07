import { Component, signal } from '@angular/core';
import {Navbar} from './shared/components/navbar/navbar';
import { AboutMe } from './about-me/about-me';
import { Intro } from './intro/intro';
import { Background } from './background/background';
import { TechnicalSkills } from './technical-skills/technical-skills';

@Component({
  selector: 'app-root',
  imports: [Navbar, AboutMe, Intro, Background, TechnicalSkills],
  templateUrl: './app.html',
  styleUrl: './app.sass'
})
export class App {
  protected readonly title = signal('victoriaogomes.github.io');
}
