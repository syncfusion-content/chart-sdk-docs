


import { AccumulationChart, AccumulationTooltip } from '@syncfusion/ej2-charts';
import { labelData } from './datasource.ts';
AccumulationChart.Inject(AccumulationTooltip);
let accChart: AccumulationChart = new AccumulationChart({
    series: [
        {
            dataSource: labelData,
            xName: 'x',
            yName: 'y'
        }],
    tooltip: {
        enable: true,
        location: { x: 200, y: 20 }
    }
}, '#element');



