import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import * as $ from 'jquery';
import { TouristService } from 'src/app/services/tourist/tourist.service';

@Component({
  selector: 'app-chart-tourist-place',
  templateUrl: './chart-tourist-place.component.html',
  styleUrls: ['./chart-tourist-place.component.css']
})
export class ChartTouristPlaceComponent implements OnInit {
  options: any;
  data: Array<any> = new Array;
  isLoading: boolean = false;

  constructor(private touristService: TouristService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.isLoading = true;
    this.touristService.getTouristsByCity()?.subscribe(
      resp => {
        resp.forEach((element: any) => {
          let city = { name: element.name.toUpperCase(), value: element.total };
          this.data.push(city);
        });
        this.drawnChart();
      }
    )
  }

  drawnChart() {
    $.get('./assets/geo-json/victoria.json', (victoriaJson) => {
      echarts.registerMap('Victoria', victoriaJson);

      this.options = {
        title: {
          text: 'Turismo en Victoria',
          subtext: 'Número de turistas por procedencia cercana',
          left: 'right'
        },
        tooltip: {
          trigger: 'item',
          showDelay: 0,
          transitionDuration: 0.2,
          formatter: function (params: any) {
            const value = (params.value + '').split('.');
            const valueStr = value[0].replace(
              /(\d{1,3})(?=(?:\d{3})+(?!\d))/g,
              '$1,'
            );
            return params.seriesName + '<br/>' + params.name + ': ' + valueStr;
          }
        },
        visualMap: {
          left: 'right',
          min: 10,
          max: this.getMax(),
          inRange: {
            color: ['#FD665F', '#FFCE34', '#65B581']
          },
          text: ['Alto', 'Bajo'],
          calculable: true
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          left: 'left',
          top: 'top',
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
          }
        },
        series: [
          {
            name: 'Nro. Turistas',
            type: 'map',
            roam: true,
            map: 'Victoria',
            emphasis: {
              label: {
                show: true
              }
            },
            data: this.data
          }
        ]
      };
    });
    this.isLoading = false;
  }

  getMax(): number {
    let max: number = -1;
    this.data.forEach(element => {
      if (parseInt(element.value) > max) {
        max = element.value;     
      }
    });    
    return max;
  }

}
