


import { AccumulationChart, PyramidSeries, IAccPointRenderEventArgs } from '@syncfusion/ej2-charts';
import { pyramidData } from './datasource.ts';
AccumulationChart.Inject(PyramidSeries);
let pyramidchart: AccumulationChart = new AccumulationChart({
    series: [{
        type: 'Pyramid',
        dataSource: pyramidData,
        xName: 'x', yName: 'y',

        explode: true,

        //Specifies the distance of the point from the center during explode, which takes values in both pixels and percentage
        explodeOffset: '10',

        //If set true, all the points in the series will get exploded on load
        explodeAll: false,

        //Specifies index of the point, to be exploded on load
        explodeIndex: 2

    }]
});
pyramidchart.appendTo('#element')



