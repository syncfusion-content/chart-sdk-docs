import { Chart, SplineAreaSeries, Category, IPointRenderEventArgs } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(SplineAreaSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Month'
    },
    primaryYAxis: {
        minimum: -5, maximum: 30, interval: 5,
        title: 'Temperature in Celsius',
        labelFormat: '{value}°C'
    },
    series:[{
        dataSource: chartData,
        xName: 'x', yName: 'y',
        // Series type as spline area series
        type: 'SplineArea',
        marker: { visible: true, isFilled: true, width: 7, height: 7 }
    }],
    title: 'Climate Graph-2012',
    pointRender: (args: IPointRenderEventArgs) => {
        if (args.point.y < 10) {
            args.fill = '#ff6347';
        }
        else {
            args.fill = '#009cb8';
        }
    }
}, '#element');