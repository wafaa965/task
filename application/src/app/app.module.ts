import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
 
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {EventService} from './event.service'

import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { TableComponent } from './views/table/table.component';

import { DragDropModule } from "@angular/cdk/drag-drop";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations' //<--- imported here

import { ToastrModule } from 'ngx-toastr';
import { EventsComponent } from './views/events/events.component';
import { EditeventComponent } from './views/editevent/editevent.component';
import { MainnavbarComponent } from './layouts/mainnavbar/mainnavbar.component';
import { SigninComponent } from './views/signin/signin.component';
import { SignupComponent } from './views/signup/signup.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    TableComponent,
    EventsComponent,
    EditeventComponent,
    MainnavbarComponent,
    SigninComponent,
    SignupComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DragDropModule,
    
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
