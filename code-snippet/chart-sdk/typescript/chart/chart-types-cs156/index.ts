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
        type: 'StepArea', fill: '#87CEEB'
    }],
    title: 'England - Run Rate',
    tooltip:{
        enable:true
    }
}, '#element');