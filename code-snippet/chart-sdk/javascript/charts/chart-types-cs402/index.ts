import { Chart, SplineSeries, Category, IPointRenderEventArgs } from '@syncfusion/ej2-charts';
import { splineData } from './datasource.ts';
Chart.Inject(SplineSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Month'
    },
    primaryYAxis: {
        minimum: -5, 
        maximum: 30, 
        interval: 5,
        title: 'Temperature in Celsius',
        labelFormat: '{value}°C'
    },
    series:[{
        dataSource: splineData,
        xName: 'x', yName: 'y',
        //Series type as spline
        type: 'Spline',
        marker: { visible: true }
    }],
    title: 'Climate Graph-2012',
    pointRender: (args: IPointRenderEventArgs) => {
        if (args.point.index % 2 !== 0) {
            args.fill = '#ff6347';
        }
        else {
            args.fill = '#009cb8';
        }
    }
}, '#element');