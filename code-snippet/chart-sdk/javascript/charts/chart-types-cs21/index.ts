


import { AccumulationChart, FunnelSeries} from '@syncfusion/ej2-charts';
import { funnelData } from './datasource.ts';
AccumulationChart.Inject(FunnelSeries);

let pyramidchart: AccumulationChart = new AccumulationChart({
    series: [{
        type: 'Funnel',
        dataSource: funnelData,
        xName: 'x', yName: 'y',
        // Defines the gap to be left between the segments
        gapRatio: 0.08,
        }],
}, '#element');



