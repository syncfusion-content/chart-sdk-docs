import { Chart, Category, PolarSeries, RangeColumnSeries } from '@syncfusion/ej2-charts';
import { rangeData } from './datasource.ts';
Chart.Inject(Category, PolarSeries, RangeColumnSeries);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category'
    },
    series: [
        {
            type: 'Polar', dataSource: rangeData,
            // Series draw type as range column series
            drawType: 'RangeColumn',
            xName: 'x', high: 'high', low: 'low'
        }
    ],
    title: 'Maximum and Minimum Temperature'
}, '#element');