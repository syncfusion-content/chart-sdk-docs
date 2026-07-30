import { Chart, RangeColumnSeries, Category, ISeriesRenderEventArgs } from '@syncfusion/ej2-charts';
import { data1, data2 } from './datasource.ts';
Chart.Inject(RangeColumnSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Month'
    },
    primaryYAxis: {
        title: 'Temperature(Celsius)',
        labelFormat: '{value}°C'
    },
    series: [
        {
            // Series type as range column series
            type: 'RangeColumn',
            dataSource: data1, 
            xName: 'x', 
            high: 'high', 
            low: 'low'
        }, 
        {
            type: 'RangeColumn',
            dataSource: data2, 
            xName: 'x', 
            high: 'high', 
            low: 'low'
        }
    ],
    title: 'Maximum and Minimum Temperature',
    seriesRender: (args: ISeriesRenderEventArgs) => {
        if (args.series.index === 0) {
            args.fill = '#ff4251';
        }
        else if (args.series.index === 1) {
            args.fill = '#4C4C4C';
        }
    }
}, '#element');