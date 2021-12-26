import { Component, OnInit } from '@angular/core';
import { TouristService } from 'src/app/services/tourist/tourist.service';

@Component({
  selector: 'app-chart-tourist-origin',
  templateUrl: './chart-tourist-origin.component.html',
  styleUrls: ['./chart-tourist-origin.component.css']
})
export class ChartTouristOriginComponent implements OnInit {
  options: any;
  xAxisDataCities: Array<String> = new Array();
  numberTourist: Array<number> = new Array();

  constructor(private touristService: TouristService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.touristService.getTouristsByCity()?.subscribe(
      resp => {
        resp.forEach((element: any) => {
          this.xAxisDataCities.push(element.name);
          this.numberTourist.push(parseInt(element.total));
        });
        this.drawnChart();
      }
    )
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
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#283b56'
          }
        }
      },
      grid: {
        containLabel: true
      },
      xAxis: {
        data: this.xAxisDataCities,
        silent: false,
        splitLine: {
          show: true,
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
