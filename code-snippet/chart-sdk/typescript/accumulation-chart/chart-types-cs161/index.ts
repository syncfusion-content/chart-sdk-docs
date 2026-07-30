import { Chart, WaterfallSeries, Category, DataLabel } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(WaterfallSeries, Category, DataLabel);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category'
    },
    primaryYAxis:
    {
        labelFormat: '${value}M'
    },
    series: [
        {
            dataSource: chartData,
            xName: 'x', yName: 'y', 
            intermediateSumIndexes: [4], 
            sumIndexes: [8],
            //Series type as Waterfall
            type: 'Waterfall', 
            summaryFillColor: "black", 
            negativeFillColor:'green',
            connector: { color: 'blue', width: 1.5 },
            marker: {
                dataLabel: {
                    visible: true,
                    position: 'Outer',
                    font: { size: '11px' }
                }
            }
        }
    ],
    title: 'Company Revenue and Profit'
}, '#element');