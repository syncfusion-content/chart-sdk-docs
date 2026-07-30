


import { AccumulationChart, AccumulationLegend, PieSeries } from '@syncfusion/ej2-charts';
AccumulationChart.Inject(AccumulationLegend, PieSeries);
import { data } from './datasource.ts';
let piechart: AccumulationChart = new AccumulationChart({
    series: [
        {
            dataSource: data,
            xName: 'x',
            yName: 'y',
        }
    ],
    legendSettings:{ 
        visible: true,
        layout: "Auto",
        maximumColumns: 3,
        fixedWidth: true
    }
}, '#element');



