import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
 
  constructor(private router:Router) {
  
    
  }

  navegaInfoProyecto(projectName:String){
      this.router.navigate(['/project'],{queryParams:{project:projectName}});
  }

}
