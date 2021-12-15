import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import { IndexPageRoutingModule } from './index-page-routing.module';
import { CoverComponent } from './components/cover/cover.component';
import { AboutComponent } from './components/about/about.component';
import { InfoComponent } from './components/info/info.component';
import { ContactComponent } from './components/contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    IndexComponent,
    CoverComponent,
    AboutComponent,
    InfoComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    IndexPageRoutingModule,
    FontAwesomeModule
  ],
  bootstrap: [
    IndexComponent
  ]
})
export class IndexPageModule { }
