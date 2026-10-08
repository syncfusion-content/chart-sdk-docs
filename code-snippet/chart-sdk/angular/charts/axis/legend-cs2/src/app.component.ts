import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { ColumnSeriesService, CategoryService, LegendService, ILegendRenderEventArgs } from '@syncfusion/ej2-angular-charts'
import { Component, OnInit } from '@angular/core';

@Component({
imports: [
         ChartModule
    ],

providers: [ ColumnSeriesService, CategoryService, LegendService ],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'
        [legendSettings]='legendSettings' [legendRender]='legendRender' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Column' xName='x' yName='y' name='Annual Sales' [marker]='marker'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    public marker?: Object;
    public legendSettings?: Object;
    public legendRender?: (args: ILegendRenderEventArgs) => void;

    ngOnInit(): void {
        this.chartData = [
            { x: 2020, y: 133, low: 20, high: 35, open: 25, close: 30 },
            { x: 2021, y: 100, low: 35, high: 55, open: 35, close: 45 },
            { x: 2022, y: 125, low: 25, high: 75, open: 45, close: 55 },
            { x: 2023, y: 90,  low: 15, high: 45, open: 20, close: 25 },
            { x: 2024, y: 116, low: 26, high: 76, open: 30, close: 45 },
            { x: 2025, y: 120, low: 30, high: 80, open: 45, close: 65 },
            { x: 2026, y: 101, low: 11, high: 61, open: 15, close: 35 }
        ];
        this.primaryXAxis = {
            title: 'Year',
            valueType: 'Double'
        };
        this.primaryYAxis = {
            title: 'Sales (in USD)'
        };
        this.marker = { visible: true };
        this.title = 'Sales Performance by Year';
        this.legendSettings = {
            visible: true,
            position: 'Bottom',
            mode: 'Point'
        };
        this.legendRender = (args: ILegendRenderEventArgs): void => {
            // `args.point` is available only when `legendSettings.mode` is `'Point'`.
            if (args.point) {
                args.text = args.series.name + ' (' + args.point.x + ', ' + args.point.y + ')';
            }
        };
    }

}
