


import { Chart, ColumnSeries,Category, DataLabel } from '@syncfusion/ej2-charts';
import { columnData } from './datasource.ts';
Chart.Inject(ColumnSeries,Category, DataLabel);

let chart: Chart = new Chart({
        primaryXAxis: {
            valueType: 'Category'
        },
        series: [
            {
                type: 'Column',
                dataSource: columnData, xName: 'country', yName: 'gold',
                marker: {
                    //Data label for chart series
                    dataLabel: { visible: true }
                }
            }
        ],

}, '#element');



