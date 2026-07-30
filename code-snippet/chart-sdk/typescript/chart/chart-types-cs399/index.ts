import { Chart, Category, LineSeries, ISeriesRenderEventArgs } from '@syncfusion/ej2-charts';
import { lineData } from './datasource.ts';
Chart.Inject(Category, LineSeries);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Month'
    },
    primaryYAxis: {
        title: 'Sales count'
    },
    series: [{
        dataSource: lineData,
        xName: 'month', yName: 'sales',
        type: 'Line',
        width: 2
    }],
    title: 'Monthly Sales Comparison',
    seriesRender: (args: ISeriesRenderEventArgs) => {
        args.fill = '#ff6347';
    }
}, '#element');
