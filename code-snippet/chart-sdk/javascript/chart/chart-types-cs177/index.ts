import { Chart, StackingBarSeries } from '@syncfusion/ej2-charts';
import { stackedData } from './datasource.ts';
Chart.Inject(StackingBarSeries);

let chart: Chart = new Chart({
    series: [
        {
            //Series type as stacked bar with cylinder shape
            type: 'StackingBar', columnFacet: 'Cylinder',
            dataSource: stackedData, xName: 'x', yName: 'y'
        }, 
        {
            type: 'StackingBar', columnFacet: 'Cylinder',
            dataSource: stackedData, xName: 'x', yName: 'y1'
        }, 
        {
            type: 'StackingBar', columnFacet: 'Cylinder',
            dataSource: stackedData, xName: 'x', yName: 'y2'
        }
    ]
}, '#element');



