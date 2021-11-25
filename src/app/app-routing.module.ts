import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/index-page/index-page.module').then(m => m.IndexPageModule) },
  { path: 'formulario', loadChildren: () => import('./modules/form-page/form-page.module').then(m => m.FormPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
