import { Chart, ScatterSeries, Legend } from '@syncfusion/ej2-charts';
import { scatterData } from './datasource.ts';
Chart.Inject(ScatterSeries, Legend);

let chart: Chart = new Chart({
    primaryXAxis: {
        minimum: 0,
        maximum: 21,
        interval: 3,
        majorGridLines: { width: 0 },
        title: 'Study Hours (Per Week)'
    },
    primaryYAxis:
    {
        title: 'Test Scores (%)',
        minimum: 0,
        maximum: 120,
        interval: 20,
        labelFormat: '{value}%'
    },
    series: [
        {
            type: 'Scatter',
            dataSource: scatterData,
            xName: 'x',
            yName: 'y', 
            marker: {
                visible: false,
                width: 10,
                height: 10,
                shape: 'Circle'
            },
            emptyPointSettings: {
                mode: 'Average',
                fill: 'red',
                border: { width: 2, color: 'green' }
            }
        }
    ],
    title: 'Relationship Between Study Hours and Test Scores'
}, '#element');