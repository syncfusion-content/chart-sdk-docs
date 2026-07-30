


import { Chart, ColumnSeries, Category, DataLabel } from '@syncfusion/ej2-charts';
import { columnData } from './datasource.ts';
Chart.Inject(ColumnSeries, Category, DataLabel);

let chart: Chart = new Chart({
        primaryXAxis: {
            valueType: 'Category'
        },
        series: [
            {
                type: 'Column',
                dataSource: columnData, xName: 'country', yName: 'gold',
                marker: {
                    dataLabel: { visible: true,
                        border:{width: 2, color : 'red'},
                        rx:10, ry: 10
                    }
                }
            }
        ],

}, '#element');



