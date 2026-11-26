import { Chart, LineSeries, ILoadedEventArgs } from '@syncfusion/ej2-charts';
import { lineData } from './datasource.ts';

Chart.Inject(LineSeries);

const chart: Chart = new Chart({
    primaryXAxis: {
        interval: 1
    },
    primaryYAxis: {
        title: 'Expense'
    },
    series: [
        {
            dataSource: lineData,
            type: 'Line',
            xName: 'x',
            yName: 'y'
        }
    ],
    title: 'Efficiency of oil-fired power production',
    loaded: (args: ILoadedEventArgs): void => {
        console.log('Chart loaded successfully');
    }
});

chart.appendTo('#element');