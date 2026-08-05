import { Component } from '@angular/core';
import { SectionHeader } from "../shared/ui/section-header/section-header";
import { TranslatePipe } from "@ngx-translate/core";
import { Infocard } from '../shared/ui/infocard/infocard';
import { ToolChip } from '../shared/ui/tool-chip/tool-chip';

@Component({
  selector: 'app-projects',
  imports: [
    SectionHeader,
    TranslatePipe,
    Infocard,
    ToolChip
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.sass',
})
export class Projects {}
