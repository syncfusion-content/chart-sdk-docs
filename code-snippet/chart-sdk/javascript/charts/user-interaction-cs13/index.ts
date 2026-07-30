


import { Chart, ScatterSeries, Legend, Selection } from '@syncfusion/ej2-charts';
import { rectData } from './datasource.ts';
Chart.Inject(ScatterSeries, Legend, Selection);

let chart: Chart = new Chart({
    series: [
        {
            type: 'Scatter',
            dataSource: rectData,
            xName: 'x',
            yName: 'y', name: 'Product A',
            marker: {
                shape: 'Triangle',
                width: 10, height: 10
            }
        },
    ],
    // selection mode as dragxy
    selectionMode: 'DragXY',
    title: 'Height Vs Weight'
}, '#element');



