


import { AccumulationChart, PyramidSeries, IAccPointRenderEventArgs } from '@syncfusion/ej2-charts';
import { pyramidData } from './datasource.ts';
AccumulationChart.Inject(PyramidSeries);
let pyramidchart: AccumulationChart = new AccumulationChart({
    series: [{
        type: 'Pyramid',
        dataSource: pyramidData,
        xName: 'x', yName: 'y',
        gapRatio: 0.04
    }],

    pointRender: (args: IAccPointRenderEventArgs) => {
        if ((args.point.x as string).indexOf('India') > -1) {
            args.fill = '#f4bc42';
        }
        else {
            args.fill = '#597cf9';
        }
    },
}, '#element');



