import { AccumulationChart, AccumulationTooltip } from '@syncfusion/ej2-charts';
import { data } from './datasource.ts';
AccumulationChart.Inject(AccumulationTooltip);
let accChart: AccumulationChart = new AccumulationChart({
    series: [
        {
            dataSource: data, name: 'Browser', xName: 'x', yName: 'y', borderRadius: 3
        }
    ],
    enableAnimation: true,
    tooltip: { enable: true, format: '<b>${point.x}</b><br>Percentage: <b>${point.y}%</b>', followPointer: true },
}, '#element');