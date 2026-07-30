import { Chart, StepAreaSeries, Tooltip, IPointRenderEventArgs } from '@syncfusion/ej2-charts';
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
        marker: { visible: true, isFilled: true, width: 7, height: 7 },
        border: { width: 2, color: 'green' }
    }],
    title: 'England - Run Rate',
    tooltip:{
        enable:true
    },
    pointRender: (args: IPointRenderEventArgs) => {
        if (args.point.y <= 8) {
            args.fill = '#ff6347';
        }
        else {
            args.fill = '#009cb8';
        }
    }
}, '#element');