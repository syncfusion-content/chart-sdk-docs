import {
    Category,
    Chart,
    IDragCompleteEventArgs,
    LineSeries,
    Selection
} from '@syncfusion/ej2-charts';
Chart.Inject(LineSeries, Category, Selection);

let chart: Chart = new Chart({
    primaryXAxis: { valueType: 'Category', title: 'Month' },
    primaryYAxis: { title: 'Sales' },
    title: 'Monthly Sales',
    selectionMode: 'DragXY',
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
        name: 'Sales'
    }],
    // Handler for drag selection completion
    dragComplete: (args: IDragCompleteEventArgs): void => {
        console.log('onDragComplete event was triggered');
    }
}, '#element');