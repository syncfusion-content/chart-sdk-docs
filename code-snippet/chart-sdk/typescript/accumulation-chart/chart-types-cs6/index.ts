


import { AccumulationChart, AccumulationDataLabel } from '@syncfusion/ej2-charts';
import { labelData } from './datasource.ts';
AccumulationChart.Inject(AccumulationDataLabel);
let piechart: AccumulationChart = new AccumulationChart({
    series: [
        {
            dataSource: labelData,
            xName: 'x',
            yName: 'y',
            dataLabel: { visible: true, position:'Outside' }
        }
    ]
}, '#element');



