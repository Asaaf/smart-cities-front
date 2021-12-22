import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-turist-transport',
  templateUrl: './chart-turist-transport.component.html',
  styleUrls: ['./chart-turist-transport.component.css']
})
export class ChartTuristTransportComponent implements OnInit {
  options: any;
  xAxisDataTransports: Array<String> = new Array();
  numberTourist: Array<number> = new Array();

  constructor() { }

  ngOnInit(): void {
    this.getData();
    this.drawnChart();
  }

  getData() {
    this.xAxisDataTransports.push('Paquete turístico');
    this.xAxisDataTransports.push('Transporte público');
    this.xAxisDataTransports.push('Vehículo particular');

    this.numberTourist.push(93);
    this.numberTourist.push(732);
    this.numberTourist.push(260);
  }

  drawnChart() {
    this.options = {
      legend: {
        data: ['Modo de transporte'],
        align: 'left',
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#283b56'
          }
        }
      },
      xAxis: {
        data: this.xAxisDataTransports,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: 'Modo de transporte',
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
