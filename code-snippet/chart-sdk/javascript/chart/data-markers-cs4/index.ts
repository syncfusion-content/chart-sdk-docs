


import { Chart, ColumnSeries, Category, DataLabel } from '@syncfusion/ej2-charts';
Chart.Inject(ColumnSeries, Category, DataLabel);

let chart: Chart = new Chart({
        primaryXAxis: {
            valueType: 'Category'
        },
        series: [
            {
                type: 'Column',
                dataSource: [{ x: 'Jan', y: 12, text: 'January : 12°C' }, { x: 'Feb', y: 8, text: 'February : 8°C' }, { x: 'Mar', y: 11, text: 'March : 11°C' }, { x: 'Apr', y: 6, text: 'April : 6°C' }],
                xName: 'x', yName: 'y',
                marker: {
                    visible: true,
                    dataLabel: { visible: true,name: 'text' }
                }
            }
        ],
}, '#element');



