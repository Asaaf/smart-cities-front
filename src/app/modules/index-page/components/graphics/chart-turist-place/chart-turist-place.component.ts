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
    this.initUsa();
  }

  initColombia() {
    $.get('./assets/geo-json/colombia-departamentos-geo.json', colombiaJson => {
      //colombiaJson.transform.translate[0] = 0;
      //colombiaJson.transform.translate[1] = 0;
      //colombiaJson.transform.scale[0] = 1;
      //colombiaJson.transform.scale[1] = 1;
      console.log(colombiaJson);
      echarts.registerMap('Colombia', colombiaJson);
      this.options = {
        tooltip: {
          trigger: 'item',
          showDelay: 0,
          transitionDuration: 0.2,
        },
        visualMap: {
          left: 'right',
          min: 1,
          max: 300,
          inRange: {
            color: [
              '#313695',
              '#4575b4',
              '#74add1',
              '#abd9e9',
              '#e0f3f8',
              '#ffffbf',
              '#fee090',
              '#fdae61',
              '#f46d43',
              '#d73027',
              '#a50026'
            ]
          },
          text: ['High', 'Low'],
          calculable: true,
          show: true,
          zlevel: 0,
          z: 4,
          seriesIndex: "all",
          right: null,
          top: null,
          bottom: 0,
          itemWidth: null,
          itemHeight: null,
          inverse: false,
          orient: "vertical",
          backgroundColor: "rgba(0, 0, 0, 0)",
          borderColor: "#ccc",
          contentColor: "#5793f3",
          inactiveColor: "#aaa",
          borderWidth: 0,
          padding: 5,
          textGap: 10,
          precision: 0,
          textStyle: {
            color: "#333"
          },
          align: "auto",
          hoverLink: true,
          realtime: true,
          handleIcon: "path://M-11.39,9.77h0a3.5,3.5,0,0,1-3.5,3.5h-22a3.5,3.5,0,0,1-3.5-3.5h0a3.5,3.5,0,0,1,3.5-3.5h22A3.5,3.5,0,0,1-11.39,9.77Z",
          handleSize: "120%"
        },
        toolbox: {
          show: true,
          //orient: 'vertical',
          left: 'left',
          top: 'top',
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
          }
        },
        dataZoom: [
          {
            type: 'inside',
          }
        ],
        series: [
          {
            name: 'Número de turistas por procedencia',
            type: 'map',
            roam: true,
            map: 'Colombia',
            emphasis: {
              label: {
                show: true
              }
            },
            data: [
              { Name: 'VICTORIA', value: 12 },
              { name: 'HONDA', value: 21 },
              { name: 'MANIZALES', value: 15 },
              { name: 'AGUADAS', value: 9 },
            ]
          }
        ]
      }
    })
  }

  initUsa() {

    $.get('./assets/geo-json/usa.json', (usaJson) => {
      console.log(usaJson);
      echarts.registerMap('USA', usaJson, {
        Alaska: {
          // 把阿拉斯加移到美国主大陆左下方
          left: -131,
          top: 25,
          width: 15
        },
        Hawaii: {
          left: -110, // 夏威夷
          top: 28,
          width: 5
        },
        'Puerto Rico': {
          // 波多黎各
          left: -76,
          top: 26,
          width: 2
        }
      });

      this.options = {
        title: {
          text: 'USA Population Estimates (2012)',
          subtext: 'Data from www.census.gov',
          sublink: 'http://www.census.gov/popest/data/datasets.html',
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
          min: 500000,
          max: 38000000,
          inRange: {
            color: [
              '#313695',
              '#4575b4',
              '#74add1',
              '#abd9e9',
              '#e0f3f8',
              '#ffffbf',
              '#fee090',
              '#fdae61',
              '#f46d43',
              '#d73027',
              '#a50026'
            ]
          },
          text: ['High', 'Low'], // 文本，默认为数值文本
          calculable: true
        },
        toolbox: {
          show: true,
          //orient: 'vertical',
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
            name: 'USA PopEstimates',
            type: 'map',
            roam: true,
            map: 'USA',
            emphasis: {
              label: {
                show: true
              }
            },
            data: [
              { name: 'Alabama', value: 4822023 },
              { name: 'Alaska', value: 731449 },
              { name: 'Arizona', value: 6553255 },
              { name: 'Arkansas', value: 2949131 },
              { name: 'California', value: 38041430 },
              { name: 'Colorado', value: 5187582 },
              { name: 'Connecticut', value: 3590347 },
              { name: 'Delaware', value: 917092 },
              { name: 'District of Columbia', value: 632323 },
              { name: 'Florida', value: 19317568 },
              { name: 'Georgia', value: 9919945 },
              { name: 'Hawaii', value: 1392313 },
              { name: 'Idaho', value: 1595728 },
              { name: 'Illinois', value: 12875255 },
              { name: 'Indiana', value: 6537334 },
              { name: 'Iowa', value: 3074186 },
              { name: 'Kansas', value: 2885905 },
              { name: 'Kentucky', value: 4380415 },
              { name: 'Louisiana', value: 4601893 },
              { name: 'Maine', value: 1329192 },
              { name: 'Maryland', value: 5884563 },
              { name: 'Massachusetts', value: 6646144 },
              { name: 'Michigan', value: 9883360 },
              { name: 'Minnesota', value: 5379139 },
              { name: 'Mississippi', value: 2984926 },
              { name: 'Missouri', value: 6021988 },
              { name: 'Montana', value: 1005141 },
              { name: 'Nebraska', value: 1855525 },
              { name: 'Nevada', value: 2758931 },
              { name: 'New Hampshire', value: 1320718 },
              { name: 'New Jersey', value: 8864590 },
              { name: 'New Mexico', value: 2085538 },
              { name: 'New York', value: 19570261 },
              { name: 'North Carolina', value: 9752073 },
              { name: 'North Dakota', value: 699628 },
              { name: 'Ohio', value: 11544225 },
              { name: 'Oklahoma', value: 3814820 },
              { name: 'Oregon', value: 3899353 },
              { name: 'Pennsylvania', value: 12763536 },
              { name: 'Rhode Island', value: 1050292 },
              { name: 'South Carolina', value: 4723723 },
              { name: 'South Dakota', value: 833354 },
              { name: 'Tennessee', value: 6456243 },
              { name: 'Texas', value: 26059203 },
              { name: 'Utah', value: 2855287 },
              { name: 'Vermont', value: 626011 },
              { name: 'Virginia', value: 8185867 },
              { name: 'Washington', value: 6897012 },
              { name: 'West Virginia', value: 1855413 },
              { name: 'Wisconsin', value: 5726398 },
              { name: 'Wyoming', value: 576412 },
              { name: 'Puerto Rico', value: 3667084 }
            ]
          }
        ]
      };
    });
  }

}
