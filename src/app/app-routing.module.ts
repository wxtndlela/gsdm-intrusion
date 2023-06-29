import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './user-pages/login/login.component';
import { RegisterComponent } from './user-pages/register/register.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { BillboardsComponent } from './pages/billboards/billboards.component';

import { AuthGuard, BuyerGuard } from '../services/guard';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'signin', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },

  //buyer pages
  { path: 'home', component: DashboardComponent },
  //{ path: 'billboards', component: BillboardsComponent },

  { path: 'media-player', loadChildren: () => import('./pages/media-player/media-player.module').then(m => m.MediaPlayerModule), canActivate: [AuthGuard] },
  { path: 'campaigns-call-to-action', loadChildren: () => import('./pages/campaigns-call-to-action/campaigns-call-to-action.module').then(m => m.CampaignsCallToActionModule), canActivate: [AuthGuard] },
  { path: 'billboards', loadChildren: () => import('./pages/billboards/billboards.module').then(m => m.BillboardsModule), canActivate: [AuthGuard] },
  { path: 'content-man', loadChildren: () => import('./pages/content-man/content-man.module').then(m => m.ContentManModule), canActivate: [AuthGuard] },
  { path: 'locations', loadChildren: () => import('./pages/locations/locations.module').then(m => m.LocationsModule), canActivate: [AuthGuard] },
  { path: 'proposals', loadChildren: () => import('./pages/proposals/proposals.module').then(m => m.ProposalsModule), canActivate: [AuthGuard] },
  { path: 'jobs', loadChildren: () => import('./pages/jobs/jobs.module').then(m => m.JobsModule), canActivate: [AuthGuard] },
  { path: 'tickets', loadChildren: () => import('./pages/tickets/tickets.module').then(m => m.TicketsModule), canActivate: [AuthGuard] },
  { path: 'schedules', loadChildren: () => import('./pages/schedules/schedules.module').then(m => m.SchedulesModule), canActivate: [AuthGuard] },
  { path: 'proof-of-flight', loadChildren: () => import('./pages/proof-of-flight/proof-of-flight.module').then(m => m.ProofOfFlightModule), canActivate: [AuthGuard] },
  { path: 'products-services', loadChildren: () => import('./pages/products-services/products-services.module').then(m => m.ProductsServicesModule), canActivate: [AuthGuard] },
  { path: 'accounts', component: AccountsComponent, canActivate: [AuthGuard] },
  { path: 'service-accounts', loadChildren: () => import('./pages/service-accounts/service-accounts.module').then(m => m.ServiceAccountModule), canActivate: [AuthGuard] },




  { path: 'basic-ui', loadChildren: () => import('./basic-ui/basic-ui.module').then(m => m.BasicUiModule), canActivate: [AuthGuard] },
  { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsDemoModule), canActivate: [AuthGuard] },
  { path: 'forms', loadChildren: () => import('./forms/form.module').then(m => m.FormModule), canActivate: [AuthGuard] },
  { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule), canActivate: [AuthGuard] },
  { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule), canActivate: [AuthGuard] },
  { path: 'general-pages', loadChildren: () => import('./general-pages/general-pages.module').then(m => m.GeneralPagesModule), canActivate: [AuthGuard] },
  // { path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule), canActivate: [AuthGuard] },

  { path: 'error-pages', loadChildren: () => import('./error-pages/error-pages.module').then(m => m.ErrorPagesModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
