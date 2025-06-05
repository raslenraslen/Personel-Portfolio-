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

import { K8sdetailsComponent } from './k8sdetails/k8sdetails.component';
import { PipelinedetailsComponent } from './pipelinedetails/pipelinedetails.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { BlooddetailsComponent } from './blooddetails/blooddetails.component';
import { BlogComponent } from './blog/blog.component';
import { CicddetailsComponent } from './cicddetails/cicddetails.component';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FooterComponent } from './footer/footer.component';





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
   
    K8sdetailsComponent,
    PipelinedetailsComponent,
    EmployeedetailsComponent,
    BlooddetailsComponent,
    BlogComponent,
    CicddetailsComponent,
    HeaderComponent,
    SideMenuComponent,
    FooterComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
