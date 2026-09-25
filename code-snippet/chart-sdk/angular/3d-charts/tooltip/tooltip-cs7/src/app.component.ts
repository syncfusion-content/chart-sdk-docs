import { Component } from '@angular/core';
import { Chart3DAllModule } from '@syncfusion/ej2-angular-charts';
import { Chart3DTooltipRenderEventArgs } from '@syncfusion/ej2-charts';

interface SalesData {
    x: string;
    y: number;
    region: string;
    growth: number;
}

@Component({
    imports: [Chart3DAllModule],
    standalone: true,
    selector: 'app-container',
    template: `
        <ejs-chart3d id="chart3d" align="center" [primaryXAxis]="primaryXAxis" [primaryYAxis]="primaryYAxis" [tooltip]="tooltip" [rotation]="rotation" [tilt]="tilt" [depth]="depth"
            [enableRotation]="enableRotation" [wallColor]="wallColor" [title]="title" (tooltipRender)="tooltipRender($event)">
            <e-chart3d-series-collection>
                <e-chart3d-series [dataSource]="chartData" xName="x" yName="y" type="Column" name="Sales">
                </e-chart3d-series>
            </e-chart3d-series-collection>
        </ejs-chart3d>
    `
})
export class AppComponent {

    public chartData: SalesData[] = [
        { x: 'USA', y: 35, region: 'North America', growth: 12.5 },
        { x: 'UK', y: 22, region: 'Europe', growth: 9.8 },
        { x: 'India', y: 28, region: 'Asia', growth: 15.2 },
        { x: 'Germany', y: 15, region: 'Europe', growth: 7.6 }
    ];

    public primaryXAxis: Object = {
        valueType: 'Category',
        title: 'Country'
    };

    public primaryYAxis: Object = {
        title: 'Sales'
    };

    public tooltip: Object = {
        enable: true
    };

    public tooltipRender(args: Chart3DTooltipRenderEventArgs): void {
        const rawData: SalesData = args.data.rawData as SalesData;

        if (rawData) {
            args.text =
                'Sales: <b>' + rawData.y + '</b><br/>' +
                'Region: <b>' + rawData.region + '</b><br/>' +
                'Growth: <b>' + rawData.growth + '%</b>';
        }
    }

    public rotation: number = 7;
    public tilt: number = 10;
    public depth: number = 100;
    public enableRotation: boolean = true;
    public wallColor: string = 'transparent';
    public title: string = 'Sales by Country';
}