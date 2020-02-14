import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {ChartsModule} from 'ng2-charts';
import {MatCardModule, MatIconModule} from '@angular/material';
import {createCustomElement} from '@angular/elements';
import { SummaryChartComponent } from './summary-chart/summary-chart.component';
import { MatrixComponent } from './matrix/matrix.component';


@NgModule({
  declarations: [
    AppComponent,
    SummaryChartComponent,
    MatrixComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  entryComponents: [AppComponent],
  // bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const shipmentList = createCustomElement(AppComponent, { injector });
    customElements.define('ship-summary', shipmentList);
  }

  ngDoBootstrap() {}
}
