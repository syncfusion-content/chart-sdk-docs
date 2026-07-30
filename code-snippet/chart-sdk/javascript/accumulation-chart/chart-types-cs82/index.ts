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
            boxPlotMode: 'Normal',
            dataSource: chartData,
            xName: 'x',
            yName: 'y',
            marker: {
                visible: true,
                width: 10,
                height: 10
            }
        }
    ]
}, '#element');



