import { Component, OnInit } from '@angular/core';
import { TouristService } from 'src/app/services/tourist/tourist.service';

@Component({
  selector: 'app-chart-tourist-activities',
  templateUrl: './chart-tourist-activities.component.html',
  styleUrls: ['./chart-tourist-activities.component.css']
})
export class ChartTouristActivitiesComponent implements OnInit {
  options: any;
  xAxisDataActivities: Array<String> = new Array();
  numberTourist: Array<number> = new Array();

  constructor(private touristService: TouristService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.touristService.getTouristsByActivity()?.subscribe(
      resp => {
        resp.forEach((element: any) => {
          this.xAxisDataActivities.push(element.name);
          this.numberTourist.push(element.total);
        });
        this.drawnChart();
      }
    );
  }

  drawnChart() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.height = 100;

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
        axisLabel: {
          type: 'text',
          interval: 0,
          rotate: 0,
          formatter: (params: any) => {
            return params.substring(0, 9) + '...';
          }
        },
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
