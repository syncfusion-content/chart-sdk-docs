


import { AccumulationChart, AccumulationDataLabel } from '@syncfusion/ej2-charts';
AccumulationChart.Inject(AccumulationDataLabel);
let piechart: AccumulationChart = new AccumulationChart({
    enableSmartLabels: true,
    series: [
        {
            dataSource: [{ x: 'Jan', y: 13, text: 'Jan: 3' }, { x: 'Feb', y: 13.5, text: 'Feb: 3.5' },
                { x: 'Mar', y: 7, text: 'Mar: 7' }, { x: 'Apr', y: 13.5, text: 'Apr: 13.5' }],
            xName: 'x',
            yName: 'y',
            dataLabel: { visible: true }
        }
    ]
}, '#element');



