import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { SectionHeader } from '../shared/components/section-header/section-header';
import { Infocard } from '../shared/components/infocard/infocard';
import { ToolChip } from '../shared/components/tool-chip/tool-chip';

@Component({
  selector: 'app-background',
  imports: [
    TranslatePipe,
    SectionHeader,
    Infocard,
    ToolChip
  ],
  templateUrl: './background.html',
  styleUrl: './background.sass',
})
export class Background {

}
