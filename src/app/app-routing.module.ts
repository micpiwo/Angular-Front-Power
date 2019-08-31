import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OutilsComponent} from './outils/outils.component';



const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: 'outils',
    component: OutilsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
