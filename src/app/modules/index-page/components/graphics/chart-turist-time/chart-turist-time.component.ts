import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-turist-time',
  templateUrl: './chart-turist-time.component.html',
  styleUrls: ['./chart-turist-time.component.css']
})
export class ChartTuristTimeComponent implements OnInit {
  options: any;

  constructor() {

    const xAxisData = [];
    const data1 = [];
    const data2 = [];

    for (let i = 0; i < 100; i++) {
      xAxisData.push('category' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    this.options = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: xAxisData
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
        data: xAxisData
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Conteo de personas',
          type: 'line',
          stack: 'Total',
          data: data1
        },
        {
          name: 'Formularios registrados',
          type: 'line',
          stack: 'Total',
          data: data2
        },
      ]
    };
  }

  ngOnInit(): void {
  }

}
