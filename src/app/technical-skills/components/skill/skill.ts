import { Component, Input } from '@angular/core';
import { FaIconComponent, IconDefinition } from "@fortawesome/angular-fontawesome";
import { SkillItem } from './skill-item';
import { ToolChip } from '../../../shared/components/tool-chip/tool-chip';

@Component({
  selector: 'app-skill',
  imports: [
    FaIconComponent,
    ToolChip
  ],
  templateUrl: './skill.html',
  styleUrl: './skill.sass',
})
export class Skill {
  @Input() icon!: IconDefinition;
  @Input() skill!: SkillItem;
  @Input() card: boolean = true;
}
