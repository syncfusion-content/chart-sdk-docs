import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts'
import { PyramidSeriesService, CategoryService, AccumulationDataLabelService } from '@syncfusion/ej2-angular-charts'
import { Component, OnInit } from '@angular/core';
import { pyramidData } from './datasource';
import { IAccTextRenderEventArgs, IAccPointRenderEventArgs } from '@syncfusion/ej2-charts';
@Component({
imports: [
         AccumulationChartModule
    ],

providers: [PyramidSeriesService,CategoryService, AccumulationDataLabelService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-accumulationchart id="chart-container"  (pointRender)="onPointRender($event)">
        <e-accumulation-series-collection>
            <e-accumulation-series  type='Pyramid' [dataSource]='pyramidData' xName='x' yName='y' [dataLabel]='datalabel' [gapRatio]="gapRatio"
            ></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public pyramidData?: Object[];
    public gapRatio: number = 0.2;
    public datalabel?: Object;
    ngOnInit(): void {
        this.datalabel = { visible: true };
        this.pyramidData = pyramidData;
    }
    public onPointRender(args: IAccPointRenderEventArgs): void {
        const xValue: string = String(args.point.x);

        if (xValue.indexOf('Downloaded') > -1) {
            args.fill = '#D3D3D3';
        } else {
            args.fill = '#597cf9';
        }
    }

}
