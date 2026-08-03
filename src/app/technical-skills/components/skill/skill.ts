import { Component, input, InputSignal } from '@angular/core';
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
  icon: InputSignal<IconDefinition | undefined> = input<IconDefinition>();
  skill: InputSignal<SkillItem> = input.required<SkillItem>();
  card: InputSignal<boolean> = input<boolean>(true);
}
