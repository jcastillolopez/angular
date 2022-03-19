import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPersonajesComponent } from './components/lista-personajes/lista-personajes.component';
import { DetallePersonajeComponent } from './components/detalle-personaje/detalle-personaje.component';
import { ListaEpisodiosComponent } from './components/lista-episodios/lista-episodios.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPersonajesComponent,
    DetallePersonajeComponent,
    ListaEpisodiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
