


import { AccumulationChart, AccumulationDataLabel, IAccTextRenderEventArgs, IAccPointRenderEventArgs } from '@syncfusion/ej2-charts';
import { data } from './datasource.ts';
AccumulationChart.Inject(AccumulationDataLabel);
let accChart: AccumulationChart = new AccumulationChart({
    series: [
        {
            dataSource: data,
            dataLabel: { visible: true, position: 'Outside' },
            groupTo: '11',
            xName: 'x',
            yName: 'y'
        }
    ],

    textRender: (args: IAccTextRenderEventArgs) => {
        if (args.text.indexOf('Others') > -1) {
            args.text = 'Grouped Slices';
            args.color = 'red';
            args.border.width = 1;
        }
    },
    pointRender: (args: IAccPointRenderEventArgs) => {
        if ((args.point.x as string).indexOf('Others') > -1) {
            args.fill = '#D3D3D3';
        }
    },
}, '#element');



