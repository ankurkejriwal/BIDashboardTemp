import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions,ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  pieChartData: number[] = [350,450,120]

  pieChartLabels: Label[] = ['XYZ','ZYZ','ACME HOSTING'];

 pieChartColors: Color[] = [
    {
       backgroundColor: ['#26547c','#ff6b6b','#ffd166'],
       borderColor : '#111'
    },
  ];

  pieChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  pieChartLegend = true;
  pieChartType = 'doughnut' as ChartType;

  ngOnInit(): void {
  }

}
