import {
    Category,
    Chart,
    IResizeEventArgs,
    LineSeries
} from '@syncfusion/ej2-charts';
Chart.Inject(LineSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category'
    },
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
    }],a
    // beforeResize event: fires before the chart starts its resize re-layout
    beforeResize: (args: IResizeEventArgs): void => {
        console.log('beforeResize:', {
            currentSize: (args as any).currentSize,
            previousSize: (args as any).previousSize
        });
    }
}, '#element');