import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsgamemaxComponent } from './detailsgamemax/detailsgamemax.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path: 'detailsgamemax' , component:DetailsgamemaxComponent} , 
  {path: 'aboutme' , component:AboutmeComponent} , 
  {path: 'contact' , component:ContactComponent} , 
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
