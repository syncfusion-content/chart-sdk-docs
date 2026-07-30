import { Chart, Category, BoxAndWhiskerSeries, IPointRenderEventArgs } from '@syncfusion/ej2-charts';
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
    pointRender: (args: IPointRenderEventArgs) => {
        if (args.point.maximum < 38) {
            args.fill = '#ff6347';
        } else {
            args.fill = '#009cb8';
        }
    }
}, '#element');



