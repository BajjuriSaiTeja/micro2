import { Component, OnInit } from '@angular/core';
import {ChartOptions, ChartType} from "chart.js";
import {Label} from "ng2-charts";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-summary-chart',
  templateUrl: './summary-chart.component.html',
  styleUrls: ['./summary-chart.component.scss']
})
export class SummaryChartComponent {
  // date = new Date();
  dateFormatted = '2/14/2020';
  pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'bottom',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  pieChartLabels: Label[] = ['Past Due Not Deliverd', 'At Risk', 'Tracking On Time', 'Delivered'];
  pieChartData: number[] = [300, 500, 100, 50];
  pieChartType: ChartType = 'pie';
  pieChartLegend = true;
  pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)', 'rgba(255,0,255,0.3)'],
    },
  ];
}
