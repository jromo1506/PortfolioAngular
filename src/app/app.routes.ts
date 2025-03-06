import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StackComponent } from './pages/stack/stack.component';

export const routes: Routes = [
    {path:"home",component:HomeComponent},
    {path:"stack",component:StackComponent},
    {path:"",component:HomeComponent},

];
