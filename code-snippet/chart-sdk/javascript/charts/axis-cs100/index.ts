


import { Chart, Category, ColumnSeries, LineSeries } from '@syncfusion/ej2-charts';
import { smartAxisData } from './datasource.ts';
Chart.Inject(ColumnSeries, Category, LineSeries);

let chart: Chart = new Chart({
    primaryXAxis: {
        title: 'Countries',
        valueType: 'Category',
        // label intersect as 45
        labelIntersectAction: 'Rotate45WithTrim'
    },
    primaryYAxis: {
        minimum: 0, maximum: 80, interval: 10,
        title: 'People(in millions)'
    },
    axes:[
        {
            majorGridLines: { width: 0 },
            rowIndex: 0, opposedPosition: true,
            lineStyle: { width: 0 },
            minimum: 24, maximum: 36, interval: 2,
            name: 'yAxis', title: 'Temperature (Celsius)',
            labelFormat: '{value}°C'
        }
    ],
    series:[{
        dataSource: chartData,
        xName: 'x', yName: 'y',
        name: 'Internet', type: 'Column'
    }],
    title: 'Internet Users'
}, '#element');



