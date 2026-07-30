


import { AccumulationChart, FunnelSeries} from '@syncfusion/ej2-charts';
import { funnelData } from './datasource.ts';
AccumulationChart.Inject(FunnelSeries);

let chart: AccumulationChart = new AccumulationChart({
    series: [{
        type: 'Funnel',
        dataSource: funnelData,
        xName: 'x', yName: 'y',
        //Width of the funnel will be 100% of the chart area
        width: '60%',
        //Height of the funnel will be 100% of the chart area
        height: '80%',
        }],
}, '#element');



