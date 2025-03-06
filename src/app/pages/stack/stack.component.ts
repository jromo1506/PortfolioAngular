import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillSelectorComponent } from 'src/app/components/skill-selector/skill-selector.component';
import { StackCarouselComponent } from 'src/app/components/stack-carousel/stack-carousel.component';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [CommonModule,SkillSelectorComponent,StackCarouselComponent,ModalComponent],
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent {
  tituloModal:String ="";
}
