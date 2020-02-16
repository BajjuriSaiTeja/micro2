import {Component, Input} from '@angular/core';
import {ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';

@Component({
  selector: 'ship-summary',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  flag = false;
  changeFlag() {
    this.flag = !this.flag;
  }
  @Input() set isDataRefreshed(value: boolean) {
    this.changeFlag();
  }
}
