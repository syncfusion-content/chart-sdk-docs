import { Chart, StepLineSeries, ISeriesRenderEventArgs } from '@syncfusion/ej2-charts';
import { stepData } from './datasource.ts';
Chart.Inject(StepLineSeries);

let chart: Chart = new Chart({
    primaryXAxis: {
        minimum: 2004, 
        maximum: 2013, 
        interval: 1,
        title: 'Year'
    },
    primaryYAxis: {
        minimum: 330, 
        maximum: 450, 
        interval: 30,
        title: 'Intensity (g/kWh)'
    },
    series:[{
        dataSource: stepData,
        xName: 'x', yName: 'y',
        //Series type as step line
        type: 'StepLine', width: 2
    }],
    title: 'CO2 - Intensity Analysis',
    seriesRender: (args: ISeriesRenderEventArgs) => {
        args.fill = '#ff6347';
    }
}, '#element');