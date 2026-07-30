import { Chart, HiloSeries, Category } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(HiloSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Months'
    },
    primaryYAxis:
    {
        labelFormat: '{value}mm',
        edgeLabelPlacement: 'Shift',
        title: 'Rainfall'
    },
    series:[
        {
            dataSource: chartData,
            xName: 'x', high: 'high', 
            low: 'low',
            type: 'Hilo',
            emptyPointSettings: {
                mode: 'Average'
            }
        }
    ],
    title: 'Maximum and Minimum Rainfall'
}, '#element');