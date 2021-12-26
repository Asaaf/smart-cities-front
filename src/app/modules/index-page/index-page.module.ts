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
import { ChartTouristTimeComponent } from './components/graphics/chart-tourist-time/chart-tourist-time.component';
import { ChartTouristOriginComponent } from './components/graphics/chart-tourist-origin/chart-tourist-origin.component';
import { ChartTouristTransportComponent } from './components/graphics/chart-tourist-transport/chart-tourist-transport.component';
import { ChartTouristPlaceComponent } from './components/graphics/chart-tourist-place/chart-tourist-place.component';
import { ChartTouristActivitiesComponent } from './components/graphics/chart-tourist-activities/chart-tourist-activities.component';
import { ChartsIndexComponent } from './components/graphics/charts-index/charts-index.component';



@NgModule({
  declarations: [
    IndexComponent,
    CoverComponent,
    AboutComponent,
    InfoComponent,
    ContactComponent,
    FooterComponent,
    ChartTouristTimeComponent,
    ChartTouristOriginComponent,
    ChartTouristTransportComponent,
    ChartTouristPlaceComponent,
    ChartTouristActivitiesComponent,
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
