import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { TopLinksComponent } from './top-links/top-links.component';
import { EmpListComponent } from './emplist/emplist.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'recommendation', component: RecommendationComponent },
  { path: 'top-links', component: TopLinksComponent },
  { path: 'emp-list', component: EmpListComponent }
];