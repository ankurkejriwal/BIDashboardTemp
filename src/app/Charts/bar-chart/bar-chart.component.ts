import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions,ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

// const barchart_data : any[] = [
//   { data: [62,59,80,81,56,54,30], label: 'Q3 Sales'},
//   { data: [25,39,60,91,36,54,50], label: 'Q4 Sales'}
// ];

//const SAMPLE_BARCHART_LABELS : string[] = ['W1','W2','W3','W4','W5','W6','W7'];



@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  barchart_data: ChartDataSets[] = [
    { data: [62,59,80,81,56,54,30], label: 'Q3 Sales'},
    { data: [25,39,60,91,36,54,50], label: 'Q4 Sales'}
  ];

  SAMPLE_BARCHART_LABELS: Label[] = ['W1','W2','W3','W4','W5','W6','W7'];

  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  barChartLegend = true;
  barChartType = 'bar' as ChartType;




  // public barChartData: any[] = this.barchart_data;
  // public barChartLabels:string[] = this.SAMPLE_BARCHART_LABELS;
  // public barChartType = 'bar';
  // public barChartLegend = false;
  // public barChartOptions: any = {
  //   scaleShowVerticalLines: false,
  //   responsive: true
  // }

  ngOnInit(): void {
  }

}
