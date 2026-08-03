import { Component, inject } from '@angular/core';
import { Skill } from "./components/skill/skill";
import { TranslatePipe, TranslateService } from "@ngx-translate/core";
import { faCode, faDatabase, faMicrochip, faServer, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/angular-fontawesome';
import { faCloud } from '@fortawesome/free-regular-svg-icons';
import { SectionHeader } from '../shared/components/section-header/section-header';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-technical-skills',
  imports: [
    Skill,
    TranslatePipe,
    SectionHeader
  ],
  templateUrl: './technical-skills.html',
  styleUrl: './technical-skills.sass',
})
export class TechnicalSkills {
  private readonly translateService = inject(TranslateService);

  protected readonly icons: Record<string, IconDefinition> = {
    "programmingLanguages": faCode,
    "frontEndDevelopment": faMicrochip,
    "backEndDevelopment": faServer,
    "cloudAndInfrastructure": faCloud,
    "dataAndSearch": faDatabase,
    "engineeringTools": faTerminal
  }

  protected readonly skills = toSignal(
    this.translateService.stream('technical-skills.list'),
    {initialValue: null}
  );
}
