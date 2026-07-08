import { Component } from '@angular/core';
import { SectionHeader } from "../shared/components/section-header/section-header";
import { TranslatePipe } from "@ngx-translate/core";
import { Infocard } from '../shared/components/infocard/infocard';
import { ToolChip } from '../shared/components/tool-chip/tool-chip';

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
