import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleSeriesComponent } from './components/detalle-series/detalle-series.component';
import { ListaSeriesComponent } from './components/lista-series/lista-series.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: './components/home' },
  { path: 'serieActiva', component: ListaSeriesComponent },
  { path: 'series/:serieId', component: DetalleSeriesComponent },
  { path: '**', redirectTo: './components/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
