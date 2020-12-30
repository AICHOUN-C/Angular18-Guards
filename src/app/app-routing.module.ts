import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { IsAdminGuard } from './core/is-admin.guard';
import { IsConnectedGuard } from './core/is-connected.guard';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'dash', component: DashBoardComponent, canActivate: [IsConnectedGuard] },
  { path: 'admin', component: AdminPageComponent, canActivate: [IsAdminGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
