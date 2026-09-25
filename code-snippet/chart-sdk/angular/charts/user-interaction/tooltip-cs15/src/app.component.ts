import { Component } from '@angular/core';
import { ChartModule, ColumnSeriesService, CategoryService, TooltipService } from '@syncfusion/ej2-angular-charts';
import type { ITooltipRenderEventArgs } from '@syncfusion/ej2-angular-charts';

interface SalesData {
    month: string;
    sales: number;
    country: string;
    growth: number;
}

@Component({
    imports: [ChartModule],
    providers: [ColumnSeriesService, CategoryService, TooltipService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart" [primaryXAxis]="primaryXAxis" [tooltip]="tooltip" title="Monthly Sales" (tooltipRender)="tooltipRender($event)">
                <e-series-collection>
                    <e-series [dataSource]="chartData" type="Column" xName="month" yName="sales" name="Sales"></e-series>
                </e-series-collection>
            </ejs-chart>`
})

export class AppComponent {

    public chartData: SalesData[] = [
        { month: 'Jan', sales: 35, country: 'USA', growth: 12.5 },
        { month: 'Feb', sales: 42, country: 'UK', growth: 15.2 },
        { month: 'Mar', sales: 38, country: 'India', growth: 10.8 },
        { month: 'Apr', sales: 48, country: 'Germany', growth: 18.4 }
    ];

    public primaryXAxis: Object = {
        valueType: 'Category'
    };

    public tooltip: Object = {
        enable: true
    };

    public tooltipRender(args: ITooltipRenderEventArgs): void {
        const rawData: SalesData = args.data.rawData as SalesData;

        if (rawData) {
            args.text = 'Sales: <b>' + rawData.sales + '</b><br/>' +
                'Country: <b>' + rawData.country + '</b><br/>' +
                'Growth: <b>' + rawData.growth + '%</b>';
        }
    }
}