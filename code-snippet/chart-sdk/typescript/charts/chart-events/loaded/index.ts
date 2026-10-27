import {
    Category,
    Chart,
    ILoadedEventArgs,
    LineSeries
} from '@syncfusion/ej2-charts';
Chart.Inject(LineSeries, Category);

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
        type: 'Line',
        xName: 'month',
        yName: 'sales',
        name: 'Sales'
    }],
    // loaded: fires after chart is rendered in the DOM
    loaded: (args: ILoadedEventArgs): void => {
        const element = args.chart?.element as HTMLElement;
        const bbox = element?.getBoundingClientRect();
        console.log('Chart loaded:', {
            title: args.chart?.title,
            width: bbox?.width,
            height: bbox?.height
        });
    }
}, '#element');