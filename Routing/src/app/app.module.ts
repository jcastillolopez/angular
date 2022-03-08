import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './conponents/info/info.component';
import { HomeComponent } from './conponents/home/home.component';
import { ContacsComponent } from './conponents/contacs/contacs.component';
import { EmpleadosComponent } from './conponents/empleados/empleados.component';
import { AutoresComponent } from './conponents/autores/autores.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    HomeComponent,
    ContacsComponent,
    EmpleadosComponent,
    AutoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
