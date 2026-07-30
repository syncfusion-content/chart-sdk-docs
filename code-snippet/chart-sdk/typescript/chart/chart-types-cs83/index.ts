import { Chart, Category, BoxAndWhiskerSeries } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(Category, BoxAndWhiskerSeries);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category'
    },
    series: [
        {
            type: 'BoxAndWhisker',
            dataSource: chartData,
            showMean: false,
            xName: 'x',
            yName: 'y'
        }
    ]
}, '#element');



