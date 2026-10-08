import { Component, ViewEncapsulation } from '@angular/core';
import { ChartModule, StackingColumnSeriesService, CategoryService, LegendService, DataLabelService, TooltipService } from '@syncfusion/ej2-angular-charts';
import { dataA, dataB, dataC, dataD, dataE, dataF, dataG, dataH } from './datasource';

@Component({
    imports: [
        ChartModule
    ],
    providers: [ StackingColumnSeriesService, CategoryService, LegendService, DataLabelService, TooltipService ],
    standalone: true,
    selector: 'app-container',
    template: `
        <div class="control-section">
            <div align="center">
                <ejs-chart id="chartcontainer" style="display:block;" [title]="title" [tooltip]="tooltip" [legendSettings]="legendSettings" [primaryXAxis]="primaryXAxis" [primaryYAxis]="primaryYAxis">
                    <e-series-collection>
                        <e-series [dataSource]="dataA" type="StackingColumn" xName="x" yName="y" name="Category A" fill="#254061" [columnWidth]="0.6" [marker]="marker"></e-series>
                        <e-series [dataSource]="dataB" type="StackingColumn" xName="x" yName="y" name="Category B" fill="#376092" [columnWidth]="0.6" [marker]="marker"></e-series>
                        <e-series [dataSource]="dataC" type="StackingColumn" xName="x" yName="y" name="Category C" fill="#4f81bd" [columnWidth]="0.6" [marker]="marker"></e-series>
                        <e-series [dataSource]="dataD" type="StackingColumn" xName="x" yName="y" name="Category D" fill="CornflowerBlue" [columnWidth]="0.6" [marker]="marker"></e-series>
                        <e-series [dataSource]="dataE" type="StackingColumn" xName="x" yName="y" name="Category E" fill="LightBlue" [columnWidth]="0.6" [marker]="marker"></e-series>
                        <e-series [dataSource]="dataF" type="StackingColumn" xName="x" yName="y" name="Category F" fill="LightSteelBlue" [columnWidth]="0.6" [marker]="marker"></e-series>
                        <e-series [dataSource]="dataG" type="StackingColumn" xName="x" yName="y" name="Category G" fill="Moccasin" [columnWidth]="0.6" [marker]="marker"></e-series>
                        <e-series [dataSource]="dataH" type="StackingColumn" xName="x" yName="y" name="Category H" fill="LightGrey" [columnWidth]="0.6" [marker]="marker"></e-series>
                    </e-series-collection>
                </ejs-chart>
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public dataA: Object[] = dataA;
    public dataB: Object[] = dataB;
    public dataC: Object[] = dataC;
    public dataD: Object[] = dataD;
    public dataE: Object[] = dataE;
    public dataF: Object[] = dataF;
    public dataG: Object[] = dataG;
    public dataH: Object[] = dataH;
    public primaryXAxis: Object = {
        valueType: 'Category'
    };
    public primaryYAxis: Object = {
        visible: false
    };
    public title: string = 'Chart Title';
    public tooltip: Object = {
        enable: true
    };
    public legendSettings: Object = {
        visible: true
    };
    public marker: Object = {
        dataLabel: {
            visible: true,
            name: 'text',
            fill: 'Transparent',
            labelIntersectAction: 'RelocateVertically',
            smartLabelSettings: {
                background: '#4f4f4f',
                border: {
                    color: 'black',
                    dashArray: '2',
                    width: 2
                },
                connectorLineStyle: {
                    color: 'black',
                    width: 2
                },
                pointerShape: 'Arrow',
                offset: 0.5
            }
        }
    };
}