import { Component } from '@angular/core';
import { AccumulationChartModule, PieSeriesService, AccumulationTooltipService } from '@syncfusion/ej2-angular-charts';
import type { ITooltipRenderEventArgs } from '@syncfusion/ej2-angular-charts';

interface SalesData {
    x: string;
    y: number;
    region: string;
    growth: number;
}

@Component({
    imports: [AccumulationChartModule],
    providers: [PieSeriesService, AccumulationTooltipService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-accumulationchart id="chart" [tooltip]="tooltip" [legendSettings]="legendSettings" title="Sales by Country" (tooltipRender)="tooltipRender($event)">
                <e-accumulation-series-collection>
                    <e-accumulation-series [dataSource]="chartData" type="Pie" xName="x" yName="y" name="Sales"></e-accumulation-series>
                </e-accumulation-series-collection>
            </ejs-accumulationchart>`
})

export class AppComponent {
    public chartData: SalesData[] = [
        { x: 'USA', y: 35, region: 'North America', growth: 12.5 },
        { x: 'UK', y: 22, region: 'Europe', growth: 9.8 },
        { x: 'India', y: 28, region: 'Asia', growth: 15.2 },
        { x: 'Germany', y: 15, region: 'Europe', growth: 7.6 }
    ];

    public tooltip: Object = {
        enable: true
    };

    public legendSettings: Object = {
        visible: false
    };

    public tooltipRender(args: ITooltipRenderEventArgs): void {
        const rawData: SalesData = args.data.rawData as SalesData;
        if (rawData) {
            args.text = 'Sales: <b>' + rawData.y + '</b><br/>' +
                'Region: <b>' + rawData.region + '</b><br/>' +
                'Growth: <b>' + rawData.growth + '%</b>';
        }
    }
}