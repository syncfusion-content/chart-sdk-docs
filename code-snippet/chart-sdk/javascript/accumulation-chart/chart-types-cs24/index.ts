


import { AccumulationChart, FunnelSeries, IAccPointRenderEventArgs } from '@syncfusion/ej2-charts';
import { funnelData } from './datasource.ts';
AccumulationChart.Inject(FunnelSeries);
let funnelChart: AccumulationChart = new AccumulationChart({
    series: [{
        type: 'Funnel',
        dataSource: funnelData,
        xName: 'x', yName: 'y', gapRatio: 0.08
    }],

    pointRender: (args: IAccPointRenderEventArgs) => {
        if ((args.point.x as string).indexOf('Downloaded') > -1) {
            args.fill = '#f4bc42';
        }
        else {
            args.fill = '#597cf9';
        }
    },
}, '#element');



