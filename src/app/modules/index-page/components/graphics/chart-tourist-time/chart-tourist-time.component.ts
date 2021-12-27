import { Component, OnInit } from '@angular/core';
import { TouristService } from 'src/app/services/tourist/tourist.service';

@Component({
  selector: 'app-chart-tourist-time',
  templateUrl: './chart-tourist-time.component.html',
  styleUrls: ['./chart-tourist-time.component.css']
})
export class ChartTouristTimeComponent implements OnInit {
  options: any;
  xAxisContJetson: Array<number> = new Array();
  xAxisContForm: Array<number> = new Array();
  date: Array<any> = new Array();

  constructor(private touristService: TouristService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.touristService.getTouristsByTime()?.subscribe(
      resp => {
        resp.devices.forEach((element: any) => {
          this.date.push(element.date);
          this.xAxisContJetson.push(element.total)
        });
        resp.forms.forEach((element: any) => {
          this.xAxisContForm.push(element.total);
        });
        this.drawnChart();
      }
    );
  }

  drawnChart() {
    this.options = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Formularios registrados', 'Conteo de personas'],
        align: 'left',
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: this.date
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Conteo de personas',
          type: 'line',
          //stack: 'Total',
          data: this.xAxisContJetson
        },
        {
          name: 'Formularios registrados',
          type: 'line',
          //stack: 'Total',
          data: this.xAxisContForm
        },
      ]
    };
  }

}
