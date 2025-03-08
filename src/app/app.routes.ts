import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StackComponent } from './pages/stack/stack.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ProjectComponent } from './pages/project/project.component';

export const routes: Routes = [
    {path:"home",component:HomeComponent},
    {path:"stack",component:StackComponent},
    {path:"portfolio",component:PortfolioComponent},
    {path:"project",component:ProjectComponent},
    {path:"contact",component:ContactComponent}
];
