import {
    Category,
    Chart,
    ColumnSeries,
    IPointRenderEventArgs
} from '@syncfusion/ej2-charts';
Chart.Inject(ColumnSeries, Category);

let chartData: { month: string; sales: number }[] = [
    { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
    { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
    { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
    { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
    { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
    { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
];

let chart: Chart = new Chart({
    primaryXAxis: { valueType: 'Category', title: 'Month' },
    primaryYAxis: { title: 'Sales' },
    title: 'Monthly Sales',
    series: [{
        dataSource: chartData,
        type: 'Column',
        xName: 'month',
        yName: 'sales',
        name: 'Sales'
    }],
    // pointRender: customize each point's appearance before rendering
    pointRender: (args: IPointRenderEventArgs): void => {
        // Highlight the highest value in red and the lowest in green
        if (typeof args.point?.y === 'number') {
            const yValues = chartData.map(d => d.sales);
            const max = Math.max(...yValues);
            const min = Math.min(...yValues);
            if (args.point.y === max) {
                args.fill = '#e74c3c';
            } else if (args.point.y === min) {
                args.fill = '#27ae60';
            }
        }
    }
}, '#element');