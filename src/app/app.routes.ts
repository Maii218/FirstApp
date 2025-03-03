import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { NotfoundComponent } from '../notfound/notfound.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},    
    {path:'home',component:HomeComponent, title:"Home Page"},
    {path:'about',component:AboutComponent,title:"About Page"},
    {path:'portfolio',component:PortfolioComponent,title:"Portfolio Page"},
    {path:'**',component:NotfoundComponent,title:"Notfound Page"}
];
