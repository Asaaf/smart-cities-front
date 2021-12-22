import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import * as $ from 'jquery';

@Component({
  selector: 'app-chart-turist-place',
  templateUrl: './chart-turist-place.component.html',
  styleUrls: ['./chart-turist-place.component.css']
})
export class ChartTuristPlaceComponent implements OnInit {
  options: any;

  constructor() { }

  ngOnInit(): void {
    this.drawnChart();
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
          max: 1000,
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
            data: [
              { name: 'HONDA', value: 782 },
              { name: 'LA DORADA', value: 806 },
              { name: 'LA MERCED', value: 120 },
              { name: 'MANZANARES', value: 145 },
              { name: 'MARMATO', value: 231 },
              { name: 'MARQUETALIA', value: 902 },
              { name: 'MARULANDA', value: 22 },
              { name: 'NEIRA', value: 30 },
              { name: 'AGUADAS', value: 45 },
              { name: 'MANIZALES', value: 23 },
              { name: 'RIOSUCIO', value: 156 },
              { name: 'ALVARADO', value: 145 },
              { name: 'VILLAHERMOSA', value: 345 },
              { name: 'VENADILLO', value: 122 },
              { name: 'SANTA ISABEL', value: 234 },
              { name: 'PUEBLO RICO', value: 1 },
              { name: 'VICTORIA', value: 1000 },
              { name: 'SAN SEBASTIÁN DE MARIQUITA', value: 700 },
              { name: 'SAMANA', value: 783 },
              { name: 'NORCASIA', value: 683 },
              { name: 'PENSILVANIA', value: 541 },
              { name: 'BOGOTÁ, D.C.', value: 3 }
            ]
          }
        ]
      };
    });
  }

}
