import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-turist-time',
  templateUrl: './chart-turist-time.component.html',
  styleUrls: ['./chart-turist-time.component.css']
})
export class ChartTuristTimeComponent implements OnInit {
  options: any;
  xAxisContJetson: Array<number> = new Array();
  xAxisContForm: Array<number> = new Array();
  date: Array<any> = new Array();

  constructor() {
  }

  ngOnInit(): void {
    this.getData();
    this.drawnChart();
  }

  getData() {
    this.xAxisContJetson.push(2);
    this.xAxisContJetson.push(4);
    this.xAxisContJetson.push(6);
    this.xAxisContJetson.push(3);
    this.xAxisContJetson.push(12);
    this.xAxisContJetson.push(5);
    this.xAxisContJetson.push(8);
    this.xAxisContJetson.push(15);
    this.xAxisContJetson.push(18);
    this.xAxisContJetson.push(7);
    this.xAxisContJetson.push(4);
    this.xAxisContJetson.push(1);
    this.xAxisContJetson.push(1);
    this.xAxisContJetson.push(2);
    this.xAxisContJetson.push(0);
    this.xAxisContJetson.push(3);
    this.xAxisContJetson.push(5);
    this.xAxisContJetson.push(6);
    this.xAxisContJetson.push(3);
    this.xAxisContJetson.push(2);

    this.xAxisContForm.push(2);
    this.xAxisContForm.push(3);
    this.xAxisContForm.push(4);
    this.xAxisContForm.push(1);
    this.xAxisContForm.push(9);
    this.xAxisContForm.push(3);
    this.xAxisContForm.push(7);
    this.xAxisContForm.push(12);
    this.xAxisContForm.push(12);
    this.xAxisContForm.push(6);
    this.xAxisContForm.push(2);
    this.xAxisContForm.push(1);
    this.xAxisContForm.push(1);
    this.xAxisContForm.push(2);
    this.xAxisContForm.push(0);
    this.xAxisContForm.push(3);
    this.xAxisContForm.push(1);
    this.xAxisContForm.push(4);
    this.xAxisContForm.push(3);
    this.xAxisContForm.push(2);

    let now = new Date();
    let len = 20;
    while (len--) {
      this.date.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
      now = new Date(+now - 540000);
    }
  }

  drawnChart() {
    this.options = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Conteo de personas', 'Formularios registrados'],
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
          stack: 'Total',
          data: this.xAxisContJetson
        },
        {
          name: 'Formularios registrados',
          type: 'line',
          stack: 'Total',
          data: this.xAxisContForm
        },
      ]
    };
  }

}
