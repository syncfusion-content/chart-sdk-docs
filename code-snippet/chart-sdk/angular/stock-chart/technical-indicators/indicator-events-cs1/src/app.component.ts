import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Component, ViewEncapsulation } from '@angular/core';
import {
    ChartAllModule,
    StockChartModule,
    CandleSeriesService,
    LineSeriesService,
    SplineSeriesService,
    DateTimeService,
    TooltipService,
    CrosshairService,
    IBeforeIndicatorChangeEventArgs,
    IIndicatorChangedEventArgs
} from '@syncfusion/ej2-angular-charts';
import { chartData } from './datasource';

@Component({
    selector: 'app-container',
    encapsulation: ViewEncapsulation.None,
    imports: [
        ChartAllModule,
        StockChartModule
    ],
    providers: [
        CandleSeriesService,
        LineSeriesService,
        SplineSeriesService,
        DateTimeService,
        TooltipService,
        CrosshairService
    ],
    standalone: true,
    template: `
        <ejs-stockchart
            id="chartcontainer"
            [title]="title"
            [primaryXAxis]="primaryXAxis"
            [tooltip]="tooltip"
            [crosshair]="crosshair"
            (beforeIndicatorChange)="beforeIndicatorChange($event)"
            (indicatorChanged)="indicatorChanged($event)">
            <e-stockchart-series-collection>
                <e-stockchart-series
                    [dataSource]="stockData"
                    type="Candle"
                    xName="date"
                    open="open"
                    high="high"
                    low="low"
                    close="close"
                    volume="volume"
                    name="Apple Inc">
                </e-stockchart-series>
            </e-stockchart-series-collection>
        </ejs-stockchart>
    `
})
export class AppComponent {
    public stockData: Object[] = chartData;
    public title: string = 'AAPL Stock Price';

    public primaryXAxis: Object = {
        valueType: 'DateTime'
    };

    public tooltip: Object = {
        enable: true
    };

    public crosshair: Object = {
        enable: true
    };

    public beforeIndicatorChange(
        args: IBeforeIndicatorChangeEventArgs
    ): void {
        console.log('Before Indicator Change:', args.type);

        if (args.type === 'Ema') {
            args.cancel = true;
        }
    }

    public indicatorChanged(
        args: IIndicatorChangedEventArgs
    ): void {
        console.log(
            `${args.type} indicator ${
                args.isAdd ? 'added' : 'removed'
            }`
        );
    }
}