import { Component, OnInit } from '@angular/core';
import { TouristService } from 'src/app/services/tourist/tourist.service';

@Component({
  selector: 'app-chart-turist-transport',
  templateUrl: './chart-turist-transport.component.html',
  styleUrls: ['./chart-turist-transport.component.css']
})
export class ChartTuristTransportComponent implements OnInit {
  options: any;
  xAxisDataTransports: Array<String> = new Array();
  numberTourist: Array<number> = new Array();

  constructor(private touristService: TouristService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.touristService.getTouristsByTransport()?.subscribe(
      resp => {
        resp.forEach((element: any) => {
          this.xAxisDataTransports.push(element.name);
          this.numberTourist.push(element.total);
        });
        this.drawnChart();
      }
    );
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
