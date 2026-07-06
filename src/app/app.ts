import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Sidebar} from './shared/components/sidebar/sidebar';
import {Navbar} from './shared/components/navbar/navbar';
import { AboutMe } from './about-me/about-me';
import { Intro } from './intro/intro';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar, Navbar, AboutMe, Intro],
  templateUrl: './app.html',
  styleUrl: './app.sass'
})
export class App {
  protected readonly title = signal('victoriaogomes.github.io');
}
