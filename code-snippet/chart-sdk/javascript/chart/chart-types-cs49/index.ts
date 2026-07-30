


import { AccumulationChart, AccumulationDataLabel, IAccPointRenderEventArgs } from '@syncfusion/ej2-charts';
import { dataMapping } from './datasource.ts';
AccumulationChart.Inject(AccumulationDataLabel);
let piechart: AccumulationChart = new AccumulationChart({
    enableBorderOnMouseMove: false,
    series: [
        {
            dataSource: dataMapping,
            xName: 'x',
            yName: 'y',
        }
    ]
}, '#element');



