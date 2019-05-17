import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdeeaPortalComponent } from './ideea-portal/ideea-portal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RiptideComponent } from './riptide/riptide.component';
import { ProfileComponent } from './profile/profile.component';
import { DooberComponent } from './doober/doober.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, data: { title: 'Dashboard' } },
  { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashoard' } },
  { path: 'riptide', component: RiptideComponent, data: { title: 'Riptide' } },
  { path: 'ideea-portal', component: IdeeaPortalComponent, data: { title: 'iDEEA Portal' } },
  { path: 'doober-finder', component: DooberComponent, data: { title: 'Doober Finder' } },
  { path: 'profile', component: ProfileComponent, data: { title: 'Profile' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
