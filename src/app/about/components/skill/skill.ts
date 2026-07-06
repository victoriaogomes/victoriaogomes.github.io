import {Component, Input, OnInit} from '@angular/core';
import {FaIconComponent, IconDefinition} from "@fortawesome/angular-fontawesome";
import {TranslatePipe, TranslateService} from "@ngx-translate/core";
import {faWrench} from '@fortawesome/free-solid-svg-icons';
import {SkillItem} from './skill-item';
import {ToolChip} from '../../../shared/components/tool-chip/tool-chip';

@Component({
  selector: 'app-skill',
  imports: [
    FaIconComponent,
    TranslatePipe,
    ToolChip
  ],
  templateUrl: './skill.html',
  styleUrl: './skill.sass',
})
export class Skill implements OnInit {
  @Input() icon!: IconDefinition;
  @Input() skill!: SkillItem;
  @Input() card: boolean = true;
  protected readonly faWrench = faWrench;
  protected skills!: SkillItem[];

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
