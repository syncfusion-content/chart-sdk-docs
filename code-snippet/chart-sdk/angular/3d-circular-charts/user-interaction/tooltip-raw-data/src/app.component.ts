import { Component, OnInit, ViewChild } from '@angular/core';
import { CircularChart3DAllModule, CircularChart3DComponent, CircularChart3DTooltipRenderEventArgs } from '@syncfusion/ej2-angular-charts';

interface SalesData {
    x: string;
    y: number;
    region: string;
    growth: number;
}
@Component({
    imports: [
        CircularChart3DAllModule
    ],
    providers: [CircularChart3DAllModule],
    standalone: true,
    selector: 'app-container',
    template: `
        <ejs-circularchart3d #chart style="display:block;" align="center" [title]="title"[tilt]="tilt" [legendSettings]="legendSettings"
            [tooltip]="tooltip" (tooltipRender)="tooltipRender($event)">
            <e-circularchart3d-series-collection>
                <e-circularchart3d-series [dataSource]="dataSource" xName="x" yName="y" name="Sales">
                </e-circularchart3d-series>
            </e-circularchart3d-series-collection>
        </ejs-circularchart3d>
    `
})
export class AppComponent implements OnInit {
    public dataSource: SalesData[] = [];
    public title: string = 'Sales by Country';
    public legendSettings: Object = { visible: false };
    public tilt: number = -45;
    public tooltip: Object = { enable: true };
    @ViewChild('chart')
    public chartObj?: CircularChart3DComponent;
    public ngOnInit(): void {
        this.dataSource = [
            { x: 'USA', y: 35, region: 'North America', growth: 12.5 },
            { x: 'UK', y: 22, region: 'Europe', growth: 9.8 },
            { x: 'India', y: 28, region: 'Asia', growth: 15.2 },
            { x: 'Germany', y: 15, region: 'Europe', growth: 7.6 }
        ];
    }
    public tooltipRender(args: CircularChart3DTooltipRenderEventArgs): void {
        const rawData: SalesData = args.data.rawData as SalesData;
        if (rawData) {
            args.text =
                'Sales: <b>' + rawData.y + '</b><br/>' +
                'Region: <b>' + rawData.region + '</b><br/>' +
                'Growth: <b>' + rawData.growth + '%</b>';
        }
    }
}