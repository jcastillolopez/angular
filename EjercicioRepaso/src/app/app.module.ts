import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { InfoComponent } from './components/info/info.component';
import { AboutComponent } from './components/about/about.component';
import { NavBarComponent } from './components/navbar/nav-bar.component';
import { TabBarComponent } from './components/tab-bar/tab-bar.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { DetalleProductoComponent } from './components/inventario/detalle-producto/detalle-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProyectosComponent,
    InfoComponent,
    AboutComponent,
    NavBarComponent,
    TabBarComponent,
    InventarioComponent,
    DetalleProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
