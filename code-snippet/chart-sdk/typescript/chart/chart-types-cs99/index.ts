import { Chart, HiloOpenCloseSeries, Category } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(HiloOpenCloseSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: {
        title: 'Month',
        valueType: 'Category'
    },
    primaryYAxis:
    {
        title: 'Price in Dollar', 
        minimum: 60, 
        maximum: 200, 
        interval: 20,
        labelFormat: '${value}'
    },
    series:[
        {
            dataSource: chartData,
            xName: 'x', open: 'open', 
            close: 'close', high: 'high', low: 'low',
            // Series type as HiloOpenClose
            type: 'HiloOpenClose'
        }
    ],
    title: 'Financial Analysis'
}, '#element');