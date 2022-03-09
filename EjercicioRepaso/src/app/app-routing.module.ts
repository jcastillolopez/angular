import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { NavBarComponent } from './components/navbar/nav-bar.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/home'
  },
  { path: 'home', component: HomeComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'info', component: InfoComponent },
  { path: 'about', component: AboutComponent },
  { path: 'navBar', component: NavBarComponent },
  { path: '**', redirectTo: '/home' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
