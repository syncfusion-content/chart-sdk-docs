import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartModule, RangeNavigatorModule, Chart, AreaSeriesService, DateTimeService, RangeTooltipService } from '@syncfusion/ej2-angular-charts';
import { IChangedEventArgs } from '@syncfusion/ej2-charts';
import { datasrc } from './datasource';

@Component({
    imports: [ChartModule, RangeNavigatorModule],
    providers: [AreaSeriesService, DateTimeService, RangeTooltipService],
    standalone: true,
    selector: 'app-container',
    template: `
    <div class="control-section">
        <h4 id="days" style="font-family: Segoe UI;font-weight: 500; font-style:normal; font-size:15px; text-align:center">Score Comparision AUS vs SL</h4>
        <ejs-rangenavigator id="rn-container" valueType="DateTime" [value]="value" [tooltip]="tooltip" [enableDeferredUpdate]="true" (changed)="onRangeChanged($event)">
            <e-rangenavigator-series-collection>
                <e-rangenavigator-series [dataSource]="chartData" type="Area" xName="x" yName="y" [width]="2">
                </e-rangenavigator-series>
            </e-rangenavigator-series-collection>
        </ejs-rangenavigator>
        <ejs-chart #chart style="display:block;" id="chart" height="350" [primaryXAxis]="primaryXAxis" [tooltip]="tooltip" [legendSettings]="legendSettings">
            <e-series-collection>
                <e-series [dataSource]="chartData" type="Area" xName="x" yName="y" [width]="2" name="Rate">
                </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>`
})
export class AppComponent implements OnInit {
    @ViewChild('chart')
    public chart?: Chart;
    public chartData?: Object[];
    public value: Object[] = [new Date('2017-09-01'), new Date('2018-02-01')];
    public tooltip: Object = { enable: true };
    public primaryXAxis: Object = {
        valueType: 'DateTime',
        edgeLabelPlacement: 'Shift'
    };
    public legendSettings: Object = { visible: false };

    ngOnInit(): void {
        this.chartData = datasrc;
    }

    public onRangeChanged(args: IChangedEventArgs): void {
        if (this.chart) {
            this.chart.primaryXAxis.zoomFactor = args.zoomFactor;
            this.chart.primaryXAxis.zoomPosition = args.zoomPosition;
            this.chart.dataBind();
        }
    }
}
