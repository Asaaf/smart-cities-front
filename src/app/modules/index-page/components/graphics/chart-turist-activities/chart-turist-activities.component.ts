import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-turist-activities',
  templateUrl: './chart-turist-activities.component.html',
  styleUrls: ['./chart-turist-activities.component.css']
})
export class ChartTuristActivitiesComponent implements OnInit {
  options: any;
  xAxisDataActivities: Array<String> = new Array();
  numberTourist: Array<number> = new Array();

  constructor() { }

  ngOnInit(): void {
    this.getData();
    this.drawnChart();
  }

  getData() {
    this.xAxisDataActivities.push('Avistamiento de aves');
    this.xAxisDataActivities.push('Fiestas patronales');
    this.xAxisDataActivities.push('Turismo de aventura en río (Rivering, Tubbing, Cayoning, Senderismo)');

    this.numberTourist.push(344);
    this.numberTourist.push(562);
    this.numberTourist.push(179);
  }

  drawnChart() {
    this.options = {
      legend: {
        data: ['Actividades'],
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
        data: this.xAxisDataActivities,
        silent: false,
        splitLine: {
          show: true,
        },
      },
      yAxis: {},
      series: [
        {
          name: 'Actividades',
          type: 'bar',
          data: this.numberTourist,
          textOutline: 'none',
          animationDelay: (idx: number) => idx * 10,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx: number) => idx * 5,
    };
  }

}
