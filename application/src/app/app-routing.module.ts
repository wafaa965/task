import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }  from './views/home/home.component'
import {TodosComponent} from './views/todos/todos.component'
import {AlltodosComponent} from './views/alltodos/alltodos.component'
import {EdittodoComponent} from './views/edittodo/edittodo.component'
import {SigninComponent} from './views/signin/signin.component';
import {SignupComponent} from './views/signup/signup.component';
import {UsersComponent} from './views/users/users.component';
import {AllusersComponent} from './views/allusers/allusers.component';
import {EdituserComponent} from './views/edituser/edituser.component'
const routes: Routes = [
  { path:'', component:HomeComponent},
  {path:'todo',component:TodosComponent},
  {path:'all',component: AlltodosComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  { path :'admin',component:UsersComponent},
  {path: 'allusers',component:AllusersComponent},
  {path:'edit/:id',component: EdittodoComponent},
  {path:'edituser/:id',component: EdituserComponent},
  {path:'del', redirectTo:'',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
