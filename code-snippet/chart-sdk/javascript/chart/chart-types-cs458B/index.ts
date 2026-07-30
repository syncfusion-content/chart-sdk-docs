import { Chart, WaterfallSeries, Category, IPointRenderEventArgs } from '@syncfusion/ej2-charts';
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
    pointRender: (args: IPointRenderEventArgs) => {
        if (args.point.index === 0) {
            args.cornerRadius = { topLeft: 10, bottomLeft: 0, topRight: 10, bottomRight: 0 };
        }
        if (args.point.index === 3 ) {
            args.cornerRadius = { topLeft: 10, bottomLeft: 0, topRight: 10, bottomRight: 0 };
        }
        if (args.point.index === 4 ) {
            args.cornerRadius = { topLeft: 10, bottomLeft: 0, topRight: 10, bottomRight: 0 };
        }
        if (args.point.index === 6 ) {
            args.cornerRadius = { topLeft: 10, bottomLeft: 0, topRight: 10, bottomRight: 0 };
        }
    }
}, '#element');