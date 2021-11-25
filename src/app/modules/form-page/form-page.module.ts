import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import { FormComponent } from './components/form/form.component';
import { FormPageRoutingModule } from './form-page-routing.module';



@NgModule({
  declarations: [
    IndexComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FormPageRoutingModule
  ],
  bootstrap: [
    IndexComponent
  ]
})
export class FormPageModule { }
