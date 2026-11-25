import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ChartModule, StockChartAllModule } from '@syncfusion/ej2-angular-charts'
import { CandleSeriesService, LineSeriesService, TmaIndicatorService, DateTimeService} from '@syncfusion/ej2-angular-charts'



import { Component } from '@angular/core';
import { chartData } from './datasource';

@Component({
imports: [
         ChartModule, StockChartAllModule
    ],

providers: [ CandleSeriesService, LineSeriesService, TmaIndicatorService, DateTimeService],
standalone: true,
    selector: 'app-container',
    template:
            `<ejs-stockchart id='chartcontainer' style="display:block;" [title]='title' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'
              [chartArea]= 'chartArea'>
              <e-stockchart-series-collection>
                 <e-stockchart-series [dataSource]='data' type='Candle' xName='date' yName='open' name='India' width=2 ></e-stockchart-series>
              </e-stockchart-series-collection>
            <e-stockchart-indicators>
                <e-stockchart-indicator type='Tma' [dataSource]='data' xName='date' field='Close' high='high' low='low' open='open' fill="blue"
                close='close' volume='volume'> </e-stockchart-indicator>
            </e-stockchart-indicators>
        </ejs-stockchart>`
})
export class AppComponent {
 public data: Object[] = chartData;
    public primaryXAxis: Object = {
        title: 'Months',
        valueType: 'DateTime',
        intervalType: 'Months',
        majorGridLines: { width: 0}
    };
    public primaryYAxis: Object = {
        title: 'Price',
        labelFormat: '${value}',
        minimum: 30, maximum: 180,
        interval: 30,
    };
    public title: string = 'AAPL 2012-2017';
    public chartArea : Object = {
      border: { width : 0}
    };
    
}


