import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoresComponent } from './conponents/autores/autores.component';
import { ContacsComponent } from './conponents/contacs/contacs.component';
import { EmpleadosComponent } from './conponents/empleados/empleados.component';
import { HomeComponent } from './conponents/home/home.component';
import { InfoComponent } from './conponents/info/info.component';
import { ProyectosComponent } from './conponents/proyectos/proyectos.component';
import { RewiusComponent } from './conponents/rewius/rewius.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'info', component: InfoComponent },
  { path: 'informacion', redirectTo: '/info' }, {
    path: 'contacs', component: ContacsComponent,
  },
  {
    path: 'empleados/:empleadoId',
    component: EmpleadosComponent,
    children: [
      { path: 'proyectos', component: ProyectosComponent },
      { path: 'rewius', component: RewiusComponent }
    ]
  },
  { path: 'autores/:autorId/libro/:libroId', component: AutoresComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
