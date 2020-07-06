import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Solar1Component } from './solar1/solar1.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '',component: DashboardComponent},
  { path: 'solar1/:id', component: Solar1Component }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
