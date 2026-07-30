


import { AccumulationChart, AccumulationDataLabel  } from '@syncfusion/ej2-charts';
import { dataMapping } from './datasource.ts';
AccumulationChart.Inject(AccumulationDataLabel);

let piechart: AccumulationChart = new AccumulationChart({
    series: [
        {
            dataSource:dataMapping ,
            //Map the fill color from data source
            pointColorMapping: 'fill',
            //Map the fill color from data source
            name: ''
            xName: 'x',
            yName: 'y',
            dataLabel: { visible: true, name:'text' }
        }
    ]
}, '#element');



