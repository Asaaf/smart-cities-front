import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import { IndexPageRoutingModule } from './index-page-routing.module';
import { CoverComponent } from './components/cover/cover.component';



@NgModule({
  declarations: [
    IndexComponent,
    CoverComponent
  ],
  imports: [
    CommonModule,
    IndexPageRoutingModule
  ],
  bootstrap: [
    IndexComponent
  ]
})
export class IndexPageModule { }
