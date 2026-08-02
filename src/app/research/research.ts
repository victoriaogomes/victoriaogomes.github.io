import { Component } from '@angular/core';
import { Infocard } from "../shared/components/infocard/infocard";
import { SectionHeader } from "../shared/components/section-header/section-header";
import { TranslatePipe } from "@ngx-translate/core";
import { faBrain, faUsers, faVrCardboard } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-research',
  imports: [
    Infocard,
    SectionHeader,
    TranslatePipe
  ],
  templateUrl: './research.html',
  styleUrl: './research.sass',
})
export class Research {
  protected readonly icons: Record<string, IconDefinition> = {
    "Ai4SE": faBrain,
    "HumAi": faUsers,
    "AiVRRehab": faVrCardboard
  }
}
