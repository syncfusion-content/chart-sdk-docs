import { Chart, RangeColumnSeries, Category, IPointRenderEventArgs } from '@syncfusion/ej2-charts';
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
        {cornerRadius: {topRight: 10 , topLeft: 10, bottomLeft: 10, bottomRight: 10},
            // Series type as range column series
            type: 'RangeColumn',
            dataSource: data1, 
            xName: 'x', 
            high: 'high', 
            low: 'low'
        }, 
        {cornerRadius: {topRight: 10 , topLeft: 10, bottomLeft: 10, bottomRight: 10},
            type: 'RangeColumn',
            dataSource: data2, 
            xName: 'x', 
            high: 'high', 
            low: 'low'
        }
    ],
    title: 'Maximum and Minimum Temperature',
}, '#element');