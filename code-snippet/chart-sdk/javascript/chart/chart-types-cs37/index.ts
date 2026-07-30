


import { AccumulationChart, AccumulationLegend } from '@syncfusion/ej2-charts';
AccumulationChart.Inject(AccumulationLegend);
import { labelData } from './datasource.ts';
let piechart: AccumulationChart = new AccumulationChart({
    series: [
        {
            dataSource: [
                    { 'x': 'Net-tution', y: 21, text: '21%' },
                    { 'x': 'Private Gifts', y: 8, text: '8%' },
                    { 'x': 'All Other', y: 9, text: '9%' },
                    { 'x': 'Local Revenue', y: 4, text: '4%' },
                    { 'x': 'State Revenue', y: 21, text: '21%' },
                    { 'x': 'Federal Revenue', y: 16, text: '16%' },
                    { 'x': 'Self-supporting Operations', y: 21, text: '21%' },
                ],
                xName: 'x', yName: 'y', startAngle: 0, endAngle: 360,
                innerRadius: '40%',
                type: 'Pie',
            }
    ],
    legendSettings:{ visible: true, position: 'Right', textWrap:'Wrap',
                     maximumLabelWidth:60, height: '44%', width: '64%' }
}, '#element');



