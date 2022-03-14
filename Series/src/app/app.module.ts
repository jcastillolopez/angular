import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaSeriesComponent } from './components/lista-series/lista-series.component';
import { HomeComponent } from './components/home/home.component';
import { DetalleSeriesComponent } from './components/detalle-series/detalle-series.component';
import { ListaPersonajesComponent } from './components/lista-personajes/lista-personajes.component';




@NgModule({
  declarations: [
    AppComponent,
    ListaSeriesComponent,
    HomeComponent,
    DetalleSeriesComponent,
    ListaPersonajesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],

  bootstrap: [AppComponent],

})
export class AppModule { }
