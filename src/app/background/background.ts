import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { SectionHeader } from '../shared/ui/section-header/section-header';
import { Infocard } from '../shared/ui/infocard/infocard';
import { ToolChip } from '../shared/ui/tool-chip/tool-chip';

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
