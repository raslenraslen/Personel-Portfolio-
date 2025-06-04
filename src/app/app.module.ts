import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsgamemaxComponent } from './detailsgamemax/detailsgamemax.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactComponent } from './contact/contact.component';
import { InfrastucuredetailsComponent } from './infrastucuredetails/infrastucuredetails.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServiceComponent } from './service/service.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { K8sdetailsComponent } from './k8sdetails/k8sdetails.component';
import { PipelinedetailsComponent } from './pipelinedetails/pipelinedetails.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsgamemaxComponent,
    AboutmeComponent,
    ContactComponent,
    InfrastucuredetailsComponent,
    ProjectsComponent,
    ServiceComponent,
    SidemenuComponent,
    K8sdetailsComponent,
    PipelinedetailsComponent,
    EmployeedetailsComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
