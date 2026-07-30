import { Chart, Category, MultiColoredLineSeries } from '@syncfusion/ej2-charts';
import { multiColorData } from './datasource.ts';
Chart.Inject(Category, MultiColoredLineSeries);
let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Month'
    },
    primaryYAxis: {
        title: 'Sales count'
    },
    series: [{
        dataSource: multiColorData,
        xName: 'month', yName: 'sales',
        pointColorMapping: 'color',
        //Series type as multi-colored line
        type: 'MultiColoredLine',
        width: 3
    }],
    title: 'Monthly Sales Comparison'
}, '#element');