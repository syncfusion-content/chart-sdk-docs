import { Chart, CandleSeries, Category } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(CandleSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Date',
        majorGridLines: { width: 0 }
    },
    primaryYAxis:
    {
        title: 'Price',
        minimum: 80,
        maximum: 200,
        interval: 20
    },
    series:[
        {
            dataSource: chartData, 
            width:2,
            xName: 'x', 
            open: 'open', 
            close: 'close', 
            high: 'high', 
            low: 'low',
            type: 'Candle',
            emptyPointSettings: {
                mode: 'Average',
                fill: 'blue'
            }
        }
    ],
    title: 'Shirpur Gold Refinery Share Price'
}, '#element');