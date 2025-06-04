import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsgamemaxComponent } from './detailsgamemax/detailsgamemax.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactComponent } from './contact/contact.component';
import { InfrastucuredetailsComponent } from './infrastucuredetails/infrastucuredetails.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServiceComponent } from './service/service.component';
import { K8sdetailsComponent } from './k8sdetails/k8sdetails.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { PipelinedetailsComponent } from './pipelinedetails/pipelinedetails.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path: 'detailsgamemax' , component:DetailsgamemaxComponent} , 
  {path: 'detailsinfr' , component:InfrastucuredetailsComponent} ,
  {path: 'aboutme' , component:AboutmeComponent} , 
  {path: 'contact' , component:ContactComponent} , 
  {path: 'projects' , component:ProjectsComponent} ,
  {path: 'k8sdetails' , component:K8sdetailsComponent} ,
  {path: 'employeedetails' , component:EmployeedetailsComponent} ,
  {path: 'pipelinedetails' , component:PipelinedetailsComponent} ,
  {path: 'service' , component:ServiceComponent} ,
 
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
