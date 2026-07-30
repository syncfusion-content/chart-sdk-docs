


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
                    dataLabel: { visible: true, template:'<div style="background:#f5f5f5; border: 1px solid black; padding: 3px 3px 3px 3px"><div>${point.x}</div><div>${point.y}</div></div>' }
                }
            }
        ],

}, '#element');



