import { Chart, WaterfallSeries, Category, ISeriesRenderEventArgs } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(WaterfallSeries, Category);

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
    ],
    seriesRender: (args: ISeriesRenderEventArgs) => {
        args.fill = '#ff6347';
        args.series.negativeFillColor = '#ff6347';
        args.series.summaryFillColor = '#ff6347';
    }
}, '#element');