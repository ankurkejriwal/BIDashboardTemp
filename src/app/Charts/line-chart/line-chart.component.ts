import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import{LINE_CHART_COLORS} from '../../shared/chart.colors'

const LINE_CHART_SAMPLE_DATA: any[] = [
  {data: [32,13,46,23,38,56],label: 'Forecasting'},
  {data: [12,13,46,35,38,56],label: 'Image Recognition'},
  {data: [32,18,46,45,37,52],label: 'Sentiment Analysis'}
];

const LINE_CHART_LABELS : string[] = ['Jan','Feb','March','April','May','June']

// const  LINE_CHART_COLORS: Color[] = [
//   {
//      backgroundColor: 'rgba(6,214,160,0.2)',
//      borderColor : 'rgba(0,200,140,0.5)',
//      pointBackgroundColor : '#000',
//      pointBorderColor: '#000',
//      pointHoverBackgroundColor: '#555',
//      pointHoverBorderColor: '#555'
//   },
//   {
//     backgroundColor: 'rgba(255,209,102,0.2)',
//     borderColor : 'rgba(240,180,89,0.5)',
//     pointBackgroundColor : '#000',
//     pointBorderColor: '#000',
//     pointHoverBackgroundColor: '#555',
//     pointHoverBorderColor: '#555'
//  },
//  {
//   backgroundColor: 'rgba(15,78,133,0.2)',
//   borderColor : 'rgba(0,200,140,0.5)',
//   pointBackgroundColor : '#000',
//   pointBorderColor: '#000',
//   pointHoverBackgroundColor: '#555',
//   pointHoverBorderColor: '#555'
// },
// ];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  linechart_data = LINE_CHART_SAMPLE_DATA;
  linechart_labels = LINE_CHART_LABELS;
  lineChart_options: any = {
    responsive: true,
    maintainAspectRatio: false
  };
  
  
  linechart_legend = true;
  linechart_type = 'line' as ChartType;
  linechart_colors = LINE_CHART_COLORS;


}
