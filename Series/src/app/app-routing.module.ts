import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaSeriesComponent } from './components/lista-series/lista-series.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: './components/home' },
  { path: 'serieActiva', component: ListaSeriesComponent },
  { path: '**', redirectTo: './components/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
