import { Chart, RangeStepAreaSeries, Category } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(RangeStepAreaSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Month',
        edgeLabelPlacement: 'Shift',
        majorGridLines: { width: 0 }
    },
    primaryYAxis: {
        labelFormat: '{value}˚C',
        title: 'Temperature',
        lineStyle: { width: 0 },
        minimum: 10,
        maximum: 40,
        majorTickLines: { width: 0 }
    },
    series: [
        {
            type: 'RangeStepArea',
            dataSource: chartData,
            xName: 'x', high: 'high',
            opacity: 0.1, border: {width:1.5},
            low: 'low', noRisers: true
        }
    ],
    title: 'Monthly Temperature Range'
}, '#element');