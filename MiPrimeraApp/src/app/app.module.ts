import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SALUDOComponent } from './saludo/saludo.component';
import { ContadorComponent } from './contador/contador.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { FormulariosComponent } from './formularios/formularios.component';

@NgModule({
  declarations: [
    AppComponent,
    SALUDOComponent,
    ContadorComponent,
    CronometroComponent,
    FormulariosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
