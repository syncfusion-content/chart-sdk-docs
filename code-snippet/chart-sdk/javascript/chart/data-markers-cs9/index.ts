import { Chart, LineSeries, Category } from '@syncfusion/ej2-charts';
import { numData } from './datasource.ts';
Chart.Inject(LineSeries, Category);

let chart: Chart = new Chart({
    series: [
        {
            type: 'Line',
            dataSource: numData, xName: 'x', yName: 'y',
            marker: {
                visible: true
            }
        },
        {
            type: 'Line',
            dataSource: numData, xName: 'x', yName: 'y1',
            marker: {
                visible: true
            }
        }
    ],

}, '#element');