import {
    Category,
    Chart,
    DataLabel,
    Legend,
    LineSeries,
    IZoomingEventArgs,
    Zoom
} from '@syncfusion/ej2-charts';
Chart.Inject(LineSeries, Category, Legend, DataLabel, Zoom);

let chart: Chart = new Chart({
    primaryXAxis: { valueType: 'Category' },
    primaryYAxis: { labelFormat: '${value}K' },
    legendSettings: { visible: true },
    title: 'Sales Analysis',
    // Enable zooming (selection zooming on X-axis)
    zoomSettings: {
        enableSelectionZooming: true,
        enablePan: true,
        mode: 'X'
    },
    series: [{
        // Data label for chart series
        marker: { dataLabel: { visible: true } },
        dataSource: [
            { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
            { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
            { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
            { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
            { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
            { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
        ],
        type: 'Line',
        xName: 'month',
        yName: 'sales',
        name: 'Sales'
    }],
    // Fires when zoom selection starts
    onZooming: (args: IZoomingEventArgs): void => {
        console.log('Zoom selection started event was triggered', args);
    }
}, '#element');