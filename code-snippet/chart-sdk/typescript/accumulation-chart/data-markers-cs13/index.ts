


import { Chart, LineSeries, IPointRenderEventArgs } from '@syncfusion/ej2-charts';
import { numData } from './datasource.ts';
Chart.Inject(LineSeries);

let chart: Chart = new Chart({
    series: [
        {
            type: 'Line',
            dataSource: numData, xName: 'x', yName: 'y',
            marker: {
                visible: true,
                height: 10, width: 10,
            }
        }
    ],
    // pointRender event for chart
    pointRender: (args: IPointRenderEventArgs) => {
        if (args.point.index === 3) {
            args.fill = 'red'
        }
    },
}, '#element');



