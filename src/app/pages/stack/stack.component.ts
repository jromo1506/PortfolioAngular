import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillSelectorComponent } from 'src/app/components/skill-selector/skill-selector.component';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [CommonModule,SkillSelectorComponent],
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent {

}
