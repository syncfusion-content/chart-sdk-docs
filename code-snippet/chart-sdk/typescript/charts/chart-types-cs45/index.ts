


import { AccumulationChart } from '@syncfusion/ej2-charts';
import { data } from './datasource.ts';
let piechart: AccumulationChart = new AccumulationChart({
    series: [
        {
            dataSource: data,
            innerRadius: '40%',
            xName: 'x',
            yName: 'y'
        }
    ]
}, '#element');



