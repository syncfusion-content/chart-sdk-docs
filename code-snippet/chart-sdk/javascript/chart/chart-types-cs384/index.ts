import { Chart, SplineSeries, Category } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(SplineSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: {
        title: 'Month',
        valueType: 'Category'
    },
    primaryYAxis: {
        minimum: -5, maximum: 25, interval: 10,
        labelFormat: '{value}˚C',
        majorGridLines: { width : 0 }
    },
    series:[{
        dataSource: chartData, 
        xName: 'x', yName: 'y',
        type: 'Spline', width:2,
        marker: { visible: true, width: 7, height: 7, isFilled: true },
        emptyPointSettings: {
            mode: 'Zero',
            fill: 'red'
        }
    }],
    isTransposed: true,
    title: 'Climate Graph-2012'
}, '#element');