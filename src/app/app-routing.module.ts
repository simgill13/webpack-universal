import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { DashboardComponent }   from './dashboard/dashboard.component';
import { SecondComponent }      from './second/second.component';
import { HomeComponent }  from './home/home.component';

const routes: Routes = [
 
  { path: '', component: HomeComponent },
  { path: 'second', component: SecondComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
