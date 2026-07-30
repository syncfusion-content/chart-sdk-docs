import { Chart, SplineRangeAreaSeries, Category, Legend } from '@syncfusion/ej2-charts';
import { splinedata } from './datasource.ts';
Chart.Inject(SplineRangeAreaSeries, Category, Legend);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Month',
        edgeLabelPlacement: 'Shift',
        majorGridLines: { width: 0 }
    },
    primaryYAxis: {
        title: 'Temperature',
        labelFormat: '{value}˚C',
        lineStyle: { width: 0 },
        minimum: 0,
        maximum: 40,
        majorTickLines: { width: 0 }
    },
    series: [
        {
            type: 'SplineRangeArea',
            dataSource: splinedata,
            xName: 'x', high: 'high', 
            low: 'low', name: 'England',
            marker: { visible: true, width: 7, height: 7, isFilled: true },
            emptyPointSettings: {
                mode: 'Zero', fill: 'red', border: { width: 2, color: 'green' }
            }
        },
        {
            type: 'SplineRangeArea',
            dataSource: splinedata,
            xName: 'x', high: 'high1', 
            low: 'low1', name: 'India',
            marker: { visible: true, width: 4, height: 4, isFilled: true },
            emptyPointSettings: {
                mode: 'Gap'
            }
        }
    ],
    title: 'Monthly Temperature Range'
}, '#element');