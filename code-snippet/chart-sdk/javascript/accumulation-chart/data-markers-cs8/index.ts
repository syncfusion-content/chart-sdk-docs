


import { Chart, LineSeries, DataLabel, IPointRenderEventArgs, ITextRenderEventArgs } from '@syncfusion/ej2-charts';
import { numData } from './datasource.ts';
Chart.Inject(LineSeries, DataLabel);

let chart: Chart = new Chart({
    series: [
        {
            type: 'Line',
            dataSource: numData, xName: 'x', yName: 'y',
            marker: {
                visible: true,
                height: 10, width: 10,
                dataLabel: { visible: true }
            }
        }
    ],
    // pointRender event for chart
    pointRender: (args: IPointRenderEventArgs) => {
        if (args.point.index === 3) {
            args.fill = 'red'
        }
    },
    textRender: (args: ITextRenderEventArgs) => {
        if (args.point.index === 3) {
            args.text = 'Maximum Temperature';
            args.color = 'red';
        }
        else {
            args.cancel = true;
        }
    }
}, '#element');



