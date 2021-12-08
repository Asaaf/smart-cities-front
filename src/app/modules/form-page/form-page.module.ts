import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import { FormComponent } from './components/form/form.component';
import { FormPageRoutingModule } from './form-page-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    IndexComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FormPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  bootstrap: [
    IndexComponent
  ]
})
export class FormPageModule { }
