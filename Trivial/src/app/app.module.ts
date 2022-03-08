import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { JuegoComponent } from './components/juego/juego.component';
import { PreguntasComponent } from './components/juego/components/preguntas/preguntas.component';
import { RespuestasComponent } from './components/juego/components/respuestas/respuestas.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JuegoComponent,
    PreguntasComponent,
    RespuestasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
