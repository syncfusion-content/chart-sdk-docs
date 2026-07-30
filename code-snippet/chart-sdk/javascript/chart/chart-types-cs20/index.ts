


import { AccumulationChart, FunnelSeries} from '@syncfusion/ej2-charts';
import { funnelData } from './datasource.ts';
AccumulationChart.Inject(FunnelSeries);

let chart: AccumulationChart = new AccumulationChart({
    series: [{
        type: 'Funnel',
        dataSource: funnelData,
        xName: 'x', yName: 'y',

        //Width of the neck will be set as 25% of the chart area
        neckWidth: '25%', neckHeight:'5%',
        }],
}, '#element');



