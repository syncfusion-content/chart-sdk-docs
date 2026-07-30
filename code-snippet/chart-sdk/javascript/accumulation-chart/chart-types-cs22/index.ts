


import { AccumulationChart, FunnelSeries, IAccPointRenderEventArgs } from '@syncfusion/ej2-charts';
import { funnelData } from './datasource.ts';
AccumulationChart.Inject(FunnelSeries);
let funnelChart: AccumulationChart = new AccumulationChart({
    series: [{
        type: 'Funnel',
        dataSource: funnelData,
        xName: 'x', yName: 'y',

        explode: true,

        //Specifies the distance of the point from the center during explode, which takes values in both pixels and percentage
        explodeOffset: '10',

        //If set true, all the points in the series will get exploded on load
        explodeAll: false,

        //Specifies index of the point, to be exploded on load
        explodeIndex:3

        }]
});
funnelChart.appendTo('#element')



