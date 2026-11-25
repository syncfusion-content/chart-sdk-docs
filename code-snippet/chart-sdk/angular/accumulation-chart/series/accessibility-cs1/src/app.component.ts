import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts';
import { PieSeriesService, AccumulationDataLabelService, AccumulationLegendService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';

@Component({
    imports: [AccumulationChartModule],
    providers: [PieSeriesService, AccumulationDataLabelService, AccumulationLegendService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-accumulationchart id="chart-container" [legendSettings]='legendSettings' [title]='title' [enableSmartLabels]='enableSmartLabels'>
        <e-accumulation-series-collection>
            <e-accumulation-series [dataSource]='chartData' type='Pie' xName='x' yName='y' [animation]='animation' [dataLabel]='dataLabel' [explode]='explode' [emptyPointSettings]='emptyPointSettings'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public chartData?: Object[];
    public legendSettings?: Object;
    public title?: string;
    public enableSmartLabels?: boolean;
    public animation?: Object;
    public dataLabel?: Object;
    public explode?: boolean;
    public emptyPointSettings?: Object;

    ngOnInit(): void {
        this.chartData = [
            { x: 'America', y: null },
            { x: 'England', y: 14 },
            { x: 'Germany', y: 12 }
        ];
        this.title = 'Empty Point as average';
        this.enableSmartLabels = true;
        this.animation = { enable: false };
        this.explode = true;
        this.emptyPointSettings = {
            mode: 'Average',
            fill: 'red'
        };
        this.dataLabel = {
            name: 'text',
            visible: true,
            position: 'Outside',
            fill: 'black',
            font: {
                fontFamily: 'Times New Roman',
                fontStyle: 'bold',
                fontWeight: '500',
                color: 'skyblue'
            },
            connectorStyle: {
                type: 'Curve',
                color: 'brown',
                width: 3,
                dashArray: '2,1',
                length: '8'
            }
        };
        this.legendSettings = {
            position: 'Left',
            shapePadding: 10,
            shapeHeight: 20,
            shapeWidth: 20,
            border: {
                color: 'black',
                width: 2
            }
        };
    }
}
