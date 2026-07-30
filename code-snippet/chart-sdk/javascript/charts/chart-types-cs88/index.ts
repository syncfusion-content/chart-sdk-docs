import { Chart, CandleSeries, Category, DateTime } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(CandleSeries, Category, DateTime);

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
            xName: 'x', 
            open: 'open', 
            close: 'close', 
            high: 'high', 
            low: 'low',
            bearFillColor: '#e56590',
            bullFillColor: '#f8b883',
            // Series type as candle series
            type: 'Candle'
        }
    ],
    title: 'Shirpur Gold Refinery Share Price'
}, '#element');