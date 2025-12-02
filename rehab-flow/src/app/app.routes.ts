import { Routes } from '@angular/router';
import { AssessmentComponent } from './assessment/assessment.component';
import { LandingComponent } from './landing/landing.component';
import { PlanComponent } from './plan/plan.component';
import { RiceComponent } from './rice/rice.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'assessment', component: AssessmentComponent },
  { path: 'plan', component: PlanComponent },
  { path: 'rice', component: RiceComponent }
];
