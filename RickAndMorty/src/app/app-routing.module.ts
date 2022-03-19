import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallePersonajeComponent } from './components/detalle-personaje/detalle-personaje.component';
import { ListaEpisodiosComponent } from './components/lista-episodios/lista-episodios.component';
import { ListaPersonajesComponent } from './components/lista-personajes/lista-personajes.component';

const routes: Routes = [
  { path: 'personajes', component: ListaPersonajesComponent },
  {
    path: 'detallePersonaje', component: DetallePersonajeComponent,
    children: [
      { path: 'episodios', component: ListaEpisodiosComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
