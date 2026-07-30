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
        type: 'StepArea', opacity: 0.5
    }],
    title: 'England - Run Rate',
    tooltip:{
        enable:true
    }
}, '#element');