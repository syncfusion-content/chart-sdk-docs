


import { AccumulationChart, PyramidSeries} from '@syncfusion/ej2-charts';
import { pyramidData } from './datasource.ts';
AccumulationChart.Inject(PyramidSeries);

let pyramidchart: AccumulationChart = new AccumulationChart({
    series: [{
        type: 'Pyramid',
        dataSource: pyramidData,
        xName: 'x', yName: 'y',
        // Defines the gap to be left between the segments
        gapRatio: 0.2,
        }],
}, '#element');



