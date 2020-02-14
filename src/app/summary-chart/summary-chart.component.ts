import { Component, OnInit } from '@angular/core';
import {ChartOptions, ChartType} from "chart.js";
import {Label} from "ng2-charts";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-summary-chart',
  templateUrl: './summary-chart.component.html',
  styleUrls: ['./summary-chart.component.scss']
})
export class SummaryChartComponent implements OnInit {
  public date = new Date();
  dateFormatted = '';
  public pieChartOptions: ChartOptions = {
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
  public pieChartLabels: Label[] = ['Past Due Not Deliverd', 'At Risk', 'Tracking On Time', 'Delivered'];
  public pieChartData: number[] = [300, 500, 100, 50];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)', 'rgba(255,0,255,0.3)'],
    },
  ];

  constructor() {
    const datePipe = new DatePipe('en')
    this.dateFormatted = datePipe.transform(this.date, 'MM/dd/yy HH:mm');
  }

  ngOnInit() {
  }

}
