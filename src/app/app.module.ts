import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {ChartsModule} from 'ng2-charts';
import {MatCardModule, MatIconModule} from '@angular/material';
import {createCustomElement} from '@angular/elements';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const shipmentList = createCustomElement(AppComponent, { injector });
    customElements.define('app-summary', shipmentList);
  }

  ngDoBootstrap() {}
}
