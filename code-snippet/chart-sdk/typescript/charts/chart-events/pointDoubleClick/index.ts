import {
    Category,
    Chart,
    ColumnSeries,
    IPointEventArgs
} from '@syncfusion/ej2-charts';
Chart.Inject(ColumnSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: { valueType: 'Category', title: 'Month' },
    primaryYAxis: { title: 'Sales' },
    title: 'Monthly Sales',
    series: [{
        dataSource: [
            { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
            { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
            { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
            { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
            { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
            { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
        ],
        type: 'Column',
        xName: 'month',
        yName: 'sales',
        name: 'Sales'
    }],
    // pointDoubleClick: fires when a data point is double-clicked
    pointDoubleClick: (args: IPointEventArgs): void => {
        console.log('Point Double Click event was triggered', {
            x: args.point?.x,
            y: args.point?.y,
            seriesIndex: args.seriesIndex,
            pointIndex: args.pointIndex
        });
    }
}, '#element');