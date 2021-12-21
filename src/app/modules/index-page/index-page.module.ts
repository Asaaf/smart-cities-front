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
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartTuristTimeComponent } from './components/graphics/chart-turist-time/chart-turist-time.component';
import { ChartTuristOriginComponent } from './components/graphics/chart-turist-origin/chart-turist-origin.component';
import { ChartTuristTransportComponent } from './components/graphics/chart-turist-transport/chart-turist-transport.component';
import { ChartTuristPlaceComponent } from './components/graphics/chart-turist-place/chart-turist-place.component';
import { ChartTuristActivitiesComponent } from './components/graphics/chart-turist-activities/chart-turist-activities.component';
import { ChartsIndexComponent } from './components/graphics/charts-index/charts-index.component';



@NgModule({
  declarations: [
    IndexComponent,
    CoverComponent,
    AboutComponent,
    InfoComponent,
    ContactComponent,
    FooterComponent,
    ChartTuristTimeComponent,
    ChartTuristOriginComponent,
    ChartTuristTransportComponent,
    ChartTuristPlaceComponent,
    ChartTuristActivitiesComponent,
    ChartsIndexComponent
  ],
  imports: [
    CommonModule,
    IndexPageRoutingModule,
    FontAwesomeModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  bootstrap: [
    IndexComponent
  ]
})
export class IndexPageModule { }
