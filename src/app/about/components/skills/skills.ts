import {Component, OnInit} from '@angular/core';
import {FaIconComponent, IconDefinition} from "@fortawesome/angular-fontawesome";
import {Infocard} from "../../../shared/infocard/infocard";
import {TranslatePipe, TranslateService} from "@ngx-translate/core";
import {faCode, faDatabase, faMicrochip, faServer, faTerminal, faWrench} from '@fortawesome/free-solid-svg-icons';
import {faCloud} from '@fortawesome/free-regular-svg-icons';
import {SkillSection} from './skill-section';
import {ToolChip} from '../../../shared/tool-chip/tool-chip';

@Component({
  selector: 'app-skills',
  imports: [
    FaIconComponent,
    Infocard,
    TranslatePipe,
    ToolChip
  ],
  templateUrl: './skills.html',
  styleUrl: './skills.sass',
})
export class Skills implements OnInit {
  protected readonly faWrench = faWrench;
  protected readonly icons: Record<string, IconDefinition> = {
    "programmingLanguages": faCode,
    "frontEndDevelopment": faMicrochip,
    "backEndDevelopment": faServer,
    "cloudAndInfrastructure": faCloud,
    "dataAndSearch": faDatabase,
    "engineeringTools": faTerminal
  }
  protected skills!: SkillSection[];

  constructor(
    private translateService: TranslateService
  ) {
  }

  ngOnInit(): void {
    this.translateService.get(
      'sections.about.skills.list'
    ).subscribe(skills => {
      this.skills = skills;
    });
  }
}
