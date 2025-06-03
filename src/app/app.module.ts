import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsgamemaxComponent } from './detailsgamemax/detailsgamemax.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactComponent } from './contact/contact.component';
import { InfrastucuredetailsComponent } from './infrastucuredetails/infrastucuredetails.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsgamemaxComponent,
    AboutmeComponent,
    ContactComponent,
    InfrastucuredetailsComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
