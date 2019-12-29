import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }  from './views/home/home.component'
import {EventsComponent} from './views/events/events.component'
import { TableComponent } from './views/table/table.component';
import {EditeventComponent} from './views/editevent/editevent.component';
import {SigninComponent} from './views/signin/signin.component';
import {SignupComponent} from './views/signup/signup.component'
const routes: Routes = [
  { path:'', component:HomeComponent},
  {path:'event',component:EventsComponent},
  {path:'superadmin',component: TableComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},

  {path:'edit/:id',component: EditeventComponent},
  {path:'del', redirectTo:'manager',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
