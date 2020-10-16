import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';
import { ChartsModule } from 'ng2-charts';
import { MyScatterChartComponent } from './my-scatter-chart/my-scatter-chart.component';
import { ApexScatterComponent } from './apex-scatter/apex-scatter.component';
import { NgApexchartsModule } from "ng-apexcharts";


@NgModule({
  declarations: [
    AppComponent,
    MyLineChartComponent,
    MyScatterChartComponent,
    ApexScatterComponent,
    
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    NgApexchartsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
