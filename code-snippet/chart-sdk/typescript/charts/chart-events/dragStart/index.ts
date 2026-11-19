import {
    Category,
    Chart,
    DataEditing,
    IDataEditingEventArgs,
    LineSeries,
    Zoom
} from '@syncfusion/ej2-charts';
Chart.Inject(LineSeries, Category, DataEditing, Zoom);

let chart: Chart = new Chart({
    primaryXAxis: { valueType: 'Category', title: 'Month' },
    primaryYAxis: { title: 'Sales' },
    title: 'Monthly Sales (Drag a point to edit)',
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
        // enable point dragging and constrain it along the Y axis
        dragSettings: {
            enable: true,
            minY: 0,
            maxY: 60
        }
    }],
    // Fires when user starts dragging a data point
    dragStart: (args: IDataEditingEventArgs): void => {
        // Inspect available details
        console.log('dragStart event was triggered');
    }
}, '#element');