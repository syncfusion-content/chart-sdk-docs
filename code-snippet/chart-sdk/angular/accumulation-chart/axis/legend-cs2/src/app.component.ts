import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts'
import { PieSeriesService, AccumulationLegendService, AccumulationDataLabelService, IAccLegendRenderEventArgs } from '@syncfusion/ej2-angular-charts'
import { Component, OnInit } from '@angular/core';

@Component({
imports: [
         AccumulationChartModule
    ],

providers: [ PieSeriesService, AccumulationLegendService, AccumulationDataLabelService ],
standalone: true,
    selector: 'app-container',
    template: `<ejs-accumulationchart id="chart-container" [legendSettings]='legendSettings' [legendRender]='legendRender' [title]='title'>
        <e-accumulation-series-collection>
            <e-accumulation-series [dataSource]='pieData' type='Pie' xName='x' yName='y' name='Browser Share' radius='65%' innerRadius='40%' [dataLabel]='dataLabel' explode='true' explodeOffset='10%'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public pieData?: Object[];
    public title?: string;
    public legendSettings?: Object;
    public dataLabel?: Object;
    public legendRender?: (args: IAccLegendRenderEventArgs) => void;
    ngOnInit(): void {
        this.pieData = [
            { x: 'Chrome', y: 37.0, text: '37%' },
            { x: 'Edge',   y: 12.5, text: '12.5%' },
            { x: 'Firefox', y: 8.1, text: '8.1%' },
            { x: 'Safari', y: 19.0, text: '19%' },
            { x: 'Opera',  y: 5.4, text: '5.4%' },
            { x: 'Others', y: 18.0, text: '18%' }
        ];
        this.dataLabel = { visible: true, name: 'text', position: 'Outside' };
        this.title = 'Browser Market Share';
        this.legendSettings = {
            visible: true,
            position: 'Right'
        };
        this.legendRender = (args: IAccLegendRenderEventArgs): void => {
            if (args.point) {
                args.text = args.point.x + ' (' + args.point.y + '%)';
            }
        };
    }

}
