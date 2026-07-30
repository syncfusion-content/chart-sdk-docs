import { Chart, Category, BoxAndWhiskerSeries, ISeriesRenderEventArgs } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(Category, BoxAndWhiskerSeries);

let chart: Chart = new Chart({
    //Initializing Primary X Axis
    primaryXAxis: {
        valueType: 'Category'
    },
    //Initializing Chart Series
    series: [
        {
            type: 'BoxAndWhisker',
            dataSource: chartData,
            xName: 'x',
            yName: 'y',
            marker: {
                visible: true,
                width: 10,
                height: 10
            }
        }
    ],
    seriesRender: (args: ISeriesRenderEventArgs) => {
        args.fill = '#ff6347';
    }
}, '#element');



