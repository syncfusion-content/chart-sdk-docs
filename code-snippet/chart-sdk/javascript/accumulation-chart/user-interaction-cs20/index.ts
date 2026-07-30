


import { Chart, StepLineSeries, Legend, Tooltip } from '@syncfusion/ej2-charts';
import { data } from './datasource.ts';
Chart.Inject(StepLineSeries, Legend, Tooltip);

let chart: Chart = new Chart({
        series: [
            {
                type: 'StepLine',
                dataSource: data, xName: 'x', yName: 'y',
                width: 2, name: 'China',
                marker: {
                    visible: true, width: 10, height: 10
                },
            }
        ],
        title: 'Unemployment Rates 1975-2010',
        tooltip: {
            enable: true,
            //tooltip template for chart
            template: '#Unemployment'
        }
}, '#element');



