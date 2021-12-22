import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-turist-origin',
  templateUrl: './chart-turist-origin.component.html',
  styleUrls: ['./chart-turist-origin.component.css']
})
export class ChartTuristOriginComponent implements OnInit {
  options: any;
  xAxisDataCities: Array<String> = new Array();
  numberTourist: Array<number> = new Array();

  constructor() { }

  ngOnInit(): void {
    this.getData();
    this.drawnChart();
  }

  getData() {
    this.xAxisDataCities.push('Honda');
    this.xAxisDataCities.push('Aguadas');
    this.xAxisDataCities.push('Anserma');
    this.xAxisDataCities.push('Aranzazu');
    this.xAxisDataCities.push('Fresno');
    this.xAxisDataCities.push('Dorada');
    this.xAxisDataCities.push('Manizales');
    this.xAxisDataCities.push('Samaná');
    this.xAxisDataCities.push('Pereira');
    this.xAxisDataCities.push('Medellin');
    this.xAxisDataCities.push('Bogotá');
    this.xAxisDataCities.push('Manzanares');
    this.xAxisDataCities.push('Dosquebradas');
    this.xAxisDataCities.push('Marsella');

    this.numberTourist.push(345);
    this.numberTourist.push(10);
    this.numberTourist.push(84);
    this.numberTourist.push(23);
    this.numberTourist.push(112);
    this.numberTourist.push(163);
    this.numberTourist.push(210);
    this.numberTourist.push(21);
    this.numberTourist.push(45);
    this.numberTourist.push(9);
    this.numberTourist.push(5);
    this.numberTourist.push(14);
    this.numberTourist.push(33);
    this.numberTourist.push(11);
  }

  drawnChart() {
    this.options = {
      legend: {
        data: ['Ciudades'],
        align: 'left',
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        data: this.xAxisDataCities,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      visualMap: {
        orient: 'horizontal',
        left: 'center',
        min: 1,
        max: 1000,
        text: ['Alto', 'Bajo'],
        inRange: {
          color: ['#FD665F', '#FFCE34', '#65B581']
        }
      },
      series: [
        {
          name: 'Ciudades',
          type: 'bar',
          data: this.numberTourist,
          animationDelay: (idx: number) => idx * 10,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx: number) => idx * 5,
    };
  }

}
