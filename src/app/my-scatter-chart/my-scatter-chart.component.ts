// this is done using the ng2-charts https://www.npmjs.com/package/ng2-charts 
//component auto generated using:  ng generate ng2-charts-schematics:scatter my-scatter-chart
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-my-scatter-chart',
  templateUrl: './my-scatter-chart.component.html',
  styleUrls: ['./my-scatter-chart.component.css']
})
export class MyScatterChartComponent implements OnInit {

  public scatterChartOptions: ChartOptions = {
    responsive: true,
  };

  public scatterChartData: ChartDataSets[] = [
    {
      data: [
        { x: 1, y: 1 },
        { x: 2.1, y: 3 },
        { x: 2.3, y: 2 },
        { x: 2.4, y: 1 },
        { x: 2, y: 1 },
        { x: 1.2, y: 3 },
        { x: 3, y: 2 },
        { x: 3, y: 2.4 },
        { x: 3, y: 2.8 },
        { x: 3, y: 2.2 },
        { x: 1.7, y: 4 },
        { x: 1.3, y: 5 },
        { x: 4.1, y: 1.2 },
        { x: 3, y: 1.3 },
        { x: 4.2, y: 2 },
        { x: 5, y: 3 },
      ],
      
      label: 'Scatter Plot A',
      backgroundColor:'teal',
      borderWidth:1,
      pointRadius: 7,
      pointBackgroundColor:'teal',
    },
    {
      data: [
        { x: 1.5, y: 1 },
        { x: 2.5, y: 3 },
        { x: 2, y: 2.5 },
        { x: 2.3, y: 1.5 },
        { x: 2, y: 1.5 },
        { x: 2, y: 1.8 },
        { x: 2, y: 1.3 },
        { x: 1.7, y: 3.5 },
        { x: 3.5, y: 2.5 },
        { x: 4.5, y: 2.5 },
        { x: 4.5, y: 5 },
        { x: 4.5, y: 2.5},
        { x: 4.3, y: 1.1 },
        { x: 4.7, y: 2.6 },
        { x: 5.6, y: 3, r: 20 },
      ],
      
      label: 'Scatter Plot B',
      backgroundColor:'pink',
      pointRadius: 7,
   
      pointBackgroundColor:'pink',
    },
  ];
  public scatterChartType: ChartType = 'scatter';

  constructor() { }

  ngOnInit() {
  }

}
