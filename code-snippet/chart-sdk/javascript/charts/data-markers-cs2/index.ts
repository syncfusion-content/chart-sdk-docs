


import { Chart, ColumnSeries, Category, DataLabel } from '@syncfusion/ej2-charts';
import { columnData } from './datasource.ts';
Chart.Inject(ColumnSeries, Category, DataLabel);

let chart: Chart = new Chart({
        primaryXAxis: {
            valueType: 'Category'
        },
        primaryYAxis:
        {
            labelFormat: '{value}°C'
        },
        series: [
            {
                type: 'Column',
                dataSource: columnData, xName: 'country', yName: 'gold',
                marker: {
                    //Data label position as middle
                    dataLabel: { visible: true, position: 'Middle' }
                }
            }
        ],

}, '#element');



