import { Chart, CandleSeries, Category, ISeriesRenderEventArgs } from '@syncfusion/ej2-charts';
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
            // Series type as candle series
            type: 'Candle'
        }
    ],
    title: 'Shirpur Gold Refinery Share Price',
    seriesRender: (args: ISeriesRenderEventArgs) => {
        args.series.bearFillColor = '#ff6347';
        args.series.bullFillColor = '#009cb8';
    }
}, '#element');