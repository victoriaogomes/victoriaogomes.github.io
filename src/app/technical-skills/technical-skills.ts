import { Component, OnInit } from '@angular/core';
import { Skill } from "./components/skill/skill";
import { TranslatePipe, TranslateService } from "@ngx-translate/core";
import { faCode, faDatabase, faMicrochip, faServer, faTerminal, faWrench } from '@fortawesome/free-solid-svg-icons';
import { SkillItem } from './components/skill/skill-item';
import { IconDefinition } from '@fortawesome/angular-fontawesome';
import { faCloud } from '@fortawesome/free-regular-svg-icons';
import { SectionHeader } from '../shared/components/section-header/section-header';

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
export class TechnicalSkills implements OnInit {
  protected skills!: Record<string, SkillItem>;
  protected readonly icons: Record<string, IconDefinition> = {
    "programmingLanguages": faCode,
    "frontEndDevelopment": faMicrochip,
    "backEndDevelopment": faServer,
    "cloudAndInfrastructure": faCloud,
    "dataAndSearch": faDatabase,
    "engineeringTools": faTerminal
  }
  protected readonly faWrench = faWrench;

  constructor(private translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.translateService.get(
      'technical-skills.list'
    ).subscribe(skills => {
      this.skills = skills;
    });
  }


}
