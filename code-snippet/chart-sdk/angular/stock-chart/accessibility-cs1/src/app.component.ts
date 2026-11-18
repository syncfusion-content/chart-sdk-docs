import { StockChartModule, DateTimeService, TooltipService, StockLegendService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';

@Component({
    imports: [StockChartModule],
    providers: [DateTimeService, TooltipService, StockLegendService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-stockchart id="chart-container" [primaryXAxis]='primaryXAxis' [title]='title' [indicatorType]='indicatorType' [trendlineType]='trendlineType' [tooltip]='tooltip' [legendSettings]='legendSettings'>
        <e-stockchart-series-collection>
            <e-stockchart-series [dataSource]='chartData' xName='x' name='China' legendShape='Pentagon'></e-stockchart-series>
        </e-stockchart-series-collection>
    </ejs-stockchart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public indicatorType: string[] = [];
    public trendlineType: string[] = [];
    public tooltip?: Object;
    public legendSettings?: Object;

    ngOnInit(): void {
        this.chartData = [
            { x: new Date('2012-04-02'), open: 85.9757, high: 90.6657, low: 85.7685, close: 90.5257, volume: 660187068 },
            { x: new Date('2012-04-09'), open: 89.4471, high: 92, low: 86.2157, close: 86.4614, volume: 912634864 },
            { x: new Date('2012-04-16'), open: 87.1514, high: 88.6071, low: 81.4885, close: 81.8543, volume: 1221746066 },
            { x: new Date('2012-04-23'), open: 81.5157, high: 88.2857, low: 79.2857, close: 86.1428, volume: 965935749 },
            { x: new Date('2012-04-30'), open: 85.4, high: 85.4857, low: 80.7385, close: 80.75, volume: 615249365 },
            { x: new Date('2012-05-07'), open: 80.2143, high: 82.2685, low: 79.8185, close: 80.9585, volume: 541742692 },
            { x: new Date('2012-05-14'), open: 80.3671, high: 81.0728, low: 74.5971, close: 75.7685, volume: 708126233 },
            { x: new Date('2012-05-21'), open: 76.3571, high: 82.3571, low: 76.2928, close: 80.3271, volume: 682076215 },
            { x: new Date('2012-05-28'), open: 81.5571, high: 83.0714, low: 80.0743, close: 82.5271, volume: 531393962 }
        ];
        this.primaryXAxis = {
            valueType: 'DateTime'
        };
        this.title = 'Unemployment Rates 1975-2010';
        this.tooltip = { enable: true };
        this.legendSettings = {
            visible: true,
            position: 'Bottom'
        };
    }
}
