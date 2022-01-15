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
        for (let i = 0; i < 10; i++) {
          this.xAxisContJetson.push(0);
          this.xAxisContForm.push(0);
          this.date.push('-');
        }

        let i = 0;
        resp.devices.forEach((element: any) => {
          this.date[i] = element.date;
          this.xAxisContJetson[i] = element.total;
          i++;
        });
        i = 0;
        resp.forms.forEach((element: any) => {
          this.xAxisContForm[i] = parseInt(element.total);
          i++;
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
