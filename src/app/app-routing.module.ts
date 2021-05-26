import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './helpers/auth.guard';

import {SiteLayoutComponent} from './_layout/site-layout/site-layout.component';
import {AppLayoutComponent} from './_layout/app-layout/app-layout.component';

import {HomeComponent} from './components/home/home.component';
import {RegisterComponent} from './components/register/register.component';
import {AuthComponent} from './components/auth/auth.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {StoriesComponent} from './components/stories/stories.component';
import {StoryDetailComponent} from './components/story-detail/story-detail.component';

const routes: Routes = [
  // Site routes goes here
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      {path: '', component: HomeComponent, pathMatch: 'full'},
    ]
  },

  // App routes goes here here
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {path: 'admin', component: DashboardComponent, canActivate: [AuthGuard]},
      {path: 'stories', component: StoriesComponent, canActivate: [AuthGuard]},
      {path: 'stories/:id', component: StoryDetailComponent, canActivate: [AuthGuard]},
    ]
  },

  // No layout routes
  {path: 'sign-in', component: AuthComponent},
  {path: 'sign-up', component: RegisterComponent},
  // Otherwise redirect to home
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
