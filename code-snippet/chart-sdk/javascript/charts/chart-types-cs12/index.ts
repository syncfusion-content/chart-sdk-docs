


import { AccumulationChart, FunnelSeries, IAccTextRenderEventArgs, AccumulationDataLabel } from '@syncfusion/ej2-charts';
import { labelData } from './datasource.ts';
AccumulationChart.Inject(FunnelSeries, AccumulationDataLabel);
let accChart: AccumulationChart = new AccumulationChart({
    series: [
        {
            dataSource: labelData,
            dataLabel: { visible: true, name: 'text', position: 'Outside' },
            xName: 'x',
            yName: 'y'
        }
    ],

    textRender: (args: IAccTextRenderEventArgs) => {
        if (args.text.indexOf('Mar') > -1) {
            args.color = 'red';
            args.border.width = 1;
        }
    },
}, '#element');



