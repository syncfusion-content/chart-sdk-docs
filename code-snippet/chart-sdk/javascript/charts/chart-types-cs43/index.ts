


import { AccumulationChart, PieSeries } from '@syncfusion/ej2-charts';
AccumulationChart.Inject(PieSeries);

let piechart: AccumulationChart = new AccumulationChart({
  // Initialize the chart series
        series: [
            {
                dataSource: [
                    { 'x': 'Chrome', y: 37, text: '37%' }, { 'x': 'UC Browser', y: 17, text: '17%' },
                    { 'x': 'iPhone', y: 19, text: '19%' },
                    { 'x': 'Others', y: 4, text: '4%' }, { 'x': 'Opera', y: 11, text: '11%' },
                    { 'x': 'Android', y: 12, text: '12%' }
                ],
                dataLabel: {
                    visible: true, position: 'Inside', name: 'text', font: { fontWeight: '600' }
                },
                radius: '70%', xName: 'x', yName: 'y', name: 'Browser'
            }
        ],
        center: { x: '60%', y: '60%' },
        enableSmartLabels: true,
        enableAnimation: false,
        legendSettings: { visible: false },
        // Initialize tht tooltip
        tooltip: { enable: true, format: '${point.x} : <b>${point.y}%</b>' },
        title: 'Mobile Browser Statistics'

}, '#element');



