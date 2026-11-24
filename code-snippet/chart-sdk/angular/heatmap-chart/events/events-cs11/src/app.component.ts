import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HeatMapModule, TooltipService, LegendService, AdaptorService } from '@syncfusion/ej2-angular-heatmap'

import { Component, ViewEncapsulation } from '@angular/core';
import { ITooltipEventArgs } from '@syncfusion/ej2-angular-heatmap';

interface SalesRecord {
    employee: string;
    month: string;
    revenue: number;
    target: number;
    region: string;
}

@Component({
imports: [
         HeatMapModule
    ],

providers: [TooltipService, LegendService, AdaptorService],
standalone: true,
    selector: 'my-app',
    template:
        `<ejs-heatmap id='container' (tooltipRender)="tooltipRender($event)" style="display:block;" [dataSource]='dataSource' [dataSourceSettings]='dataSourceSettings' [xAxis]='xAxis' [yAxis]='yAxis'
       [cellSettings]='cellSettings' [titleSettings]='titleSettings' [showTooltip]='showTooltip'>
        </ejs-heatmap>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public showTooltip: boolean = true;
    public tooltipRender(args: ITooltipEventArgs): void {
        let record: SalesRecord = args.data as SalesRecord;

        if (record) {
            args.content = [
                'Employee: ' + record.employee +
                '<br/>Month: ' + record.month +
                '<br/>Revenue: $' + record.revenue + 'K' +
                '<br/>Target: $' + record.target + 'K' +
                '<br/>Region: ' + record.region
            ];
        }
    }
    public dataSource: SalesRecord[] = [
        {
            employee: 'Nancy',
            month: 'Jan',
            revenue: 73,
            target: 70,
            region: 'North America'
        },
        {
            employee: 'Nancy',
            month: 'Feb',
            revenue: 39,
            target: 50,
            region: 'North America'
        },
        {
            employee: 'Nancy',
            month: 'Mar',
            revenue: 26,
            target: 45,
            region: 'North America'
        },
        {
            employee: 'Andrew',
            month: 'Jan',
            revenue: 93,
            target: 80,
            region: 'Europe'
        },
        {
            employee: 'Andrew',
            month: 'Feb',
            revenue: 58,
            target: 55,
            region: 'Europe'
        },
        {
            employee: 'Andrew',
            month: 'Mar',
            revenue: 53,
            target: 60,
            region: 'Europe'
        },
        {
            employee: 'Janet',
            month: 'Jan',
            revenue: 99,
            target: 90,
            region: 'Asia Pacific'
        },
        {
            employee: 'Janet',
            month: 'Feb',
            revenue: 28,
            target: 40,
            region: 'Asia Pacific'
        },
        {
            employee: 'Janet',
            month: 'Mar',
            revenue: 22,
            target: 35,
            region: 'Asia Pacific'
        }
    ];
    public dataSourceSettings: Object = {
        isJsonData: true,
        adaptorType: 'Cell',
        xDataMapping: 'employee',
        yDataMapping: 'month',
        valueMapping: 'revenue'
    };
    public titleSettings: Object = {
        text: 'Sales Revenue per Employee (in 1000 US$)',
        textStyle: {
            size: '15px',
            fontWeight: '500',
            fontStyle: 'Normal',
            fontFamily: 'Segoe UI'
        }
    };
    public xAxis: Object = {
        labels: ['Nancy', 'Andrew', 'Janet']
    };
    public yAxis: Object = {
        labels: ['Jan', 'Feb', 'Mar']
    };
    public cellSettings: Object = {
        showLabel: true,
        format: '${value}K'
    };
}