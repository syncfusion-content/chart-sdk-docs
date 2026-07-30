import { Chart, BubbleSeries, IPointRenderEventArgs } from '@syncfusion/ej2-charts';
import { bubbleData } from './datasource.ts';
Chart.Inject(BubbleSeries);

let chart: Chart = new Chart({
    primaryXAxis: {
        title: 'Literacy Rate',
        minimum: 60,
        maximum: 100,
        interval: 5
    },
    primaryYAxis: {
        title: 'GDP growth rate',
        minimum: -2,
        maximum: 16,
        interval: 2
    },
    series: [
        {
            type: 'Bubble',
            dataSource: bubbleData,
            xName: 'x', yName: 'y',
            size: 'size'
        }
    ],
    title: 'GDP vs Literacy Rate',
    pointRender: (args: IPointRenderEventArgs) => {
        if (args.point.y < 4) {
            args.fill = '#ff6347';
        }
        else {
            args.fill = '#009cb8';
        }
    }
}, '#element');