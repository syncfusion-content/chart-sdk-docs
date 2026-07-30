


import { Chart, LineSeries, Category, ChartAnnotation } from '@syncfusion/ej2-charts';
import { columnData } from './datasource.ts';
Chart.Inject(LineSeries, Category, ChartAnnotation);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
    },
     primaryYAxis: {
      title: 'Medals'
    },
    annotations:[{
        content: '<div id ="test" style="border-top:3px dashed grey;border-top-width: 2px; width: 10000px"></div>',
        x: 'France',
        y: 50,
        coordinateUnits: 'Point',
        Region: 'Chart'
    }],
    series:[{
        dataSource: columnData,
        xName: 'country', yName: 'gold',
        type: 'Line'
    }],

}, '#element');



