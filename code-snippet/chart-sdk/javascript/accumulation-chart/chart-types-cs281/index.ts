import { Chart, StepAreaSeries, Tooltip } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(StepAreaSeries, Tooltip);

let chart: Chart = new Chart({
    primaryXAxis: {
        title: 'Overs'
    },
    primaryYAxis: {
        title: 'Runs'
    },
    series:[{
        dataSource: chartData,
        xName: 'x', yName: 'y',
        type: 'StepArea',
        border: { width: 2, color: 'green' },
        marker: { visible: true, width: 7, height: 7, isFilled: true },
        emptyPointSettings: {
            mode: 'Zero',
            fill: 'red',
            border: { width: 2, color: 'green' }
        }
    }],
    title: 'England - Run Rate',
    tooltip:{
        enable:true
    }
}, '#element');