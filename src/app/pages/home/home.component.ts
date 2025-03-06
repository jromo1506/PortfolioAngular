import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCardComponent } from 'src/app/components/skill-card/skill-card.component';
import { SkillSelectorComponent } from 'src/app/components/skill-selector/skill-selector.component';
import { InfoCarouselComponent } from 'src/app/components/info-carousel/info-carousel/info-carousel.component';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,SkillSelectorComponent,InfoCarouselComponent,RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
}
