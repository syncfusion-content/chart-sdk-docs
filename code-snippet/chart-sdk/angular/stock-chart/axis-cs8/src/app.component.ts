import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import {
    ChartModule,
    ChartAllModule,
    StockChartAllModule,
    DateTimeService,
    DateTimeCategoryService,
    LogarithmicService
} from '@syncfusion/ej2-angular-charts';
import {
    Chart,
    DateTime,
    Logarithmic,
    CandleSeries
} from '@syncfusion/ej2-charts';
import { chartData } from './datasource';

Chart.Inject(
    DateTime,
    Logarithmic,
    CandleSeries
);

@Component({
    imports: [
        ChartModule,
        ChartAllModule,
        StockChartAllModule
    ],
    providers: [
        DateTimeService,
        DateTimeCategoryService,
        LogarithmicService
    ],
    standalone: true,
    selector: 'app-container',
    template: `
        <ejs-stockchart
            id="chart-container"
            [primaryXAxis]="primaryXAxis"
            [primaryYAxis]="primaryYAxis"
            [title]="title">
            <e-stockchart-series-collection>
                <e-stockchart-series
                    [dataSource]="chartData"
                    type="Candle"
                    xName="date"
                    open="open"
                    high="high"
                    low="low"
                    close="close"
                    volume="volume"
                    name="India"
                    [width]="2">
                </e-stockchart-series>
            </e-stockchart-series-collection>
        </ejs-stockchart>
    `
})
export class AppComponent {
    public chartData: Object[] = chartData;

    public title: string =
        'Efficiency of oil-fired power production';

    public primaryXAxis: Object = {
        valueType: 'DateTime'
    };

    public primaryYAxis: Object = {
        valueType: 'Logarithmic',
        logBase: 10,
        minimum: 10,
        maximum: 1000
    };
}