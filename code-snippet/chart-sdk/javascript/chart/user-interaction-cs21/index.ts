


import { Chart, StepLineSeries, DateTime, Legend, Tooltip } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(StepLineSeries, DateTime, Legend, Tooltip);

let chart: Chart = new Chart({
        primaryXAxis: {
            valueType: 'DateTime',
        },
        //Highlight color for tooltip
        highlightColor: 'red',
        series: [
            {
                type: 'StepLine',
                dataSource: chartData, xName: 'x', yName: 'y',
                width: 2, name: 'China',
                marker: {
                    visible: true, width: 10, height: 10
                },
            }
        ],
        title: 'Unemployment Rates 1975-2010',
        tooltip: {
            enable: true,
            format: '${series.name} ${point.x} : ${point.y}',
            //fill for tooltip
            fill: '#7bb4eb',
            //border for tooltip
            border: {
                width: 2,
                color: 'grey'
            }
        }
}, '#element');



