


import { AccumulationChart, PyramidSeries} from '@syncfusion/ej2-charts';
import { pyramidData } from './datasource.ts';
AccumulationChart.Inject(PyramidSeries);

let chart: AccumulationChart = new AccumulationChart({
    series: [{
        type: 'Pyramid',
        dataSource: pyramidData,
        xName: 'x', yName: 'y',

        //Width of the pyramid will be 100% of the chart area
        width: '60%',

        //Height of the pyramid will be 100% of the chart area
        height: '80%',
        }],
}, '#element');



