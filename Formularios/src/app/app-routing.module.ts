import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelComponent } from './components/model/model.component';
import { TempleteComponent } from './components/templete/templete.component';

const routes: Routes = [

  { path: 'model', component: ModelComponent },
  { path: 'templete', component: TempleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
