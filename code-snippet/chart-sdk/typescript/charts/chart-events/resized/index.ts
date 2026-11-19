import {
    Category,
    Chart,
    DataLabel,
    IResizeEventArgs,
    Legend,
    LineSeries
} from '@syncfusion/ej2-charts';
Chart.Inject(LineSeries, Category, Legend, DataLabel);

let chart: Chart = new Chart({
    primaryXAxis: { valueType: 'Category' },
    primaryYAxis: { labelFormat: '${value}K' },
    legendSettings: { visible: true },
    title: 'Sales Analysis',
    series: [{
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
        name: 'Sales',
        // Data label for chart series
        marker: { dataLabel: { visible: true } }
    }],
    // resized: fires after the chart completes resizing
    resized: (args: IResizeEventArgs): void => {
        console.log('Chart resized:', {
            currentSize: (args as any).currentSize,
            previousSize: (args as any).previousSize
        });
    }
}, '#element');