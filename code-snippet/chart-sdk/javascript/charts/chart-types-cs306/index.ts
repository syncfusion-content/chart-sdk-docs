import { Chart, RangeColumnSeries, Category } from '@syncfusion/ej2-charts';
import { data1, data2 } from './datasource.ts';
Chart.Inject(RangeColumnSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Month'
    },
    primaryYAxis: {
        title: 'Temperature(Celsius)',
        labelFormat: '{value}°C'
    },
    series: [
        {
            // Series type as range column series
            type: 'RangeColumn',
            dataSource: data1, 
            xName: 'x', 
            high: 'high', 
            low: 'low',
            emptyPointSettings: {
                mode: 'Average',
                fill: 'red',
                border: { width: 2, color: 'green' }
            }
        }, 
        {
            type: 'RangeColumn',
            dataSource: data2, 
            xName: 'x', 
            high: 'high', 
            low: 'low',
            emptyPointSettings: {
                mode: 'Gap'
            }
        }
    ],
    title: 'Maximum and Minimum Temperature'
}, '#element');