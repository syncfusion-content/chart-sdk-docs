import { Chart, WaterfallSeries, Category, DataLabel } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(WaterfallSeries, Category, DataLabel);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category'
    },
    series: [
        {
            dataSource: chartData,
            xName: 'x', yName: 'y', 
            intermediateSumIndexes: [4], 
            sumIndexes: [8],
            //Series type as Waterfall
            type: 'Waterfall'
        }
    ]
}, '#element');