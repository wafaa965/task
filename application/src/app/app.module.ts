import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
 
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UsersService} from './users.service';
import {TodoService} from './todo.service'
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
 import {AuthinterceptorService} from './authinterceptor.service'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations' //<--- imported here

import { ToastrModule } from 'ngx-toastr';
import { MainnavbarComponent } from './layouts/mainnavbar/mainnavbar.component';
import { SigninComponent } from './views/signin/signin.component';
import { SignupComponent } from './views/signup/signup.component';
import { TodosComponent } from './views/todos/todos.component';
import { AlltodosComponent } from './views/alltodos/alltodos.component';
import { EdittodoComponent } from './views/edittodo/edittodo.component';
import { EdituserComponent } from './views/edituser/edituser.component';
import { UsersComponent } from './views/users/users.component';
import { AllusersComponent } from './views/allusers/allusers.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MainnavbarComponent,
    SigninComponent,
    SignupComponent,
    TodosComponent,
    AlltodosComponent,
    EdittodoComponent,
    EdituserComponent,
    UsersComponent,
    AllusersComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthinterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
