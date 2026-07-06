import { Component } from '@angular/core';
import { SectionHeader } from '../shared/components/section-header/section-header';
import { TranslatePipe } from '@ngx-translate/core';
import { SafeHtmlPipe } from '../shared/pipes/safe-html.pipe';

@Component({
  selector: 'app-about-me',
  imports: [
    SectionHeader,
    TranslatePipe,
    SafeHtmlPipe
  ],
  templateUrl: './about-me.html',
  styleUrl: './about-me.sass',
})
export class AboutMe {
}
