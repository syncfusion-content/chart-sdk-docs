


import { AccumulationChart } from '@syncfusion/ej2-charts';
let piechart: AccumulationChart = new AccumulationChart({
    series: [
        {
            dataSource: [{ x: 'Jan', y: 3 }, { x: 'Feb', y: 3.5 }, { x: 'Mar', y: undefined }, { x: 'Apr', y: 13.5 },
            { x: 'May', y: 19 }, { x: 'Jun', y: 23.5 }, { x: 'Jul', y: null }, { x: 'Aug', y: 25 },
            { x: 'Sep', y: 21 }, { x: 'Oct', y: 15 }],
            emptyPointSettings: { mode: 'Average', fill: 'pink' },
            xName: 'x',
            yName: 'y'
        }
    ]
}, '#element');



