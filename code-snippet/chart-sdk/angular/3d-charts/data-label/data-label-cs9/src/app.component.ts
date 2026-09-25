import { Component, OnInit } from '@angular/core';
import { Chart3DAllModule } from '@syncfusion/ej2-angular-charts';

@Component({
    imports: [
        Chart3DAllModule
    ],
    standalone: true,
    selector: 'app-container',
    template: `
        <ejs-chart3d id="chart-container" [primaryXAxis]="primaryXAxis" [primaryYAxis]="primaryYAxis" [legendSettings]="legendSettings" [title]="title" rotation=7 tilt=10 depth=100 [enableRotation]='enableRotation'>
            <e-chart3d-series-collection>
                <e-chart3d-series [dataSource]="chartData" xName="x" yName="y" type="StackingColumn" name="UK" [animation]="animation" [columnWidth]="0.5" [dataLabel]="defaultDataLabel">
                </e-chart3d-series>
                <e-chart3d-series [dataSource]="chartData" xName="x" yName="y1" type="StackingColumn" name="Germany" [animation]="animation" [columnWidth]="0.5" [dataLabel]="defaultDataLabel">
                </e-chart3d-series>
                <e-chart3d-series [dataSource]="chartData" xName="x" yName="y2" type="StackingColumn" name="France" [animation]="animation" [columnWidth]="0.5" [dataLabel]="franceDataLabel">
                </e-chart3d-series>
                <e-chart3d-series [dataSource]="chartData" xName="x" yName="y3" type="StackingColumn" name="Italy" [animation]="animation" [columnWidth]="0.5" [dataLabel]="italyDataLabel">
                </e-chart3d-series>
            </e-chart3d-series-collection>
        </ejs-chart3d>
    `
})
export class AppComponent implements OnInit {
    public chartData: Object[] = [];
    public primaryXAxis: Object = {};
    public primaryYAxis: Object = {};
    public enableRotation?: boolean;
    public legendSettings: Object = {};
    public animation: Object = {};
    public defaultDataLabel: Object = {};
    public franceDataLabel: Object = {};
    public italyDataLabel: Object = {};
    public title: string = 'Mobile Game Market by Country';
    public ngOnInit(): void {
        this.chartData = [
            { x: '2014', y: 21.1,  y1: 76.9,  y2: 66.1,  y3: 34.1 },
            { x: '2015', y: 127.3, y1: 20.5,  y2: 19.3,  y3: 38.2 },
            { x: '2016', y: 143.4, y1: 121.7, y2: 91.3,  y3: 44.0 },
            { x: '2017', y: 559.9, y1: 342.5, y2: 62.4,  y3: 91.6 },
            { x: '2018', y: 175.4, y1: 166.7, y2: 112.9, y3: 61.9 },
            { x: '2019', y: 189.0, y1: 182.9, y2: 122.4, y3: 71.5 },
            { x: '2020', y: 202.7, y1: 197.3, y2: 120.9, y3: 82.0 }
        ];
        this.primaryXAxis = {
            title: 'Years',
            interval: 1,
            valueType: 'Category'
        };
        this.primaryYAxis = {
            title: 'Sales in Billions',
            labelFormat: '{value}B'
        };
        this.enableRotation = true;
        this.legendSettings = {
            visible: true
        };
        this.animation = {
            enable: false
        };
        this.defaultDataLabel = {
            visible: true,
            labelIntersectAction: 'RelocateVertically'
        };
        this.franceDataLabel = {
            visible: true,
            labelIntersectAction: 'RelocateVertically',
            smartLabelSettings: {
                connectorLineStyle: {
                    color: 'RED',
                    width: 2
                },
                background: 'green',
                border: {
                    color: 'yellow',
                    dashArray: '2',
                    width: 2
                },
                pointerShape: 'Arrow',
                offset: 0.2
            }
        };
        this.italyDataLabel = {
            visible: true,
            labelIntersectAction: 'RelocateVertically',
            smartLabelSettings: {
                connectorLineStyle: {
                    color: 'RED',
                    width: 2
                },
                background: 'green',
                border: {
                    color: 'yellow',
                    dashArray: '2',
                    width: 2
                },
                pointerShape: 'Arrow',
                offset: 0.8
            }
        };
    }
}