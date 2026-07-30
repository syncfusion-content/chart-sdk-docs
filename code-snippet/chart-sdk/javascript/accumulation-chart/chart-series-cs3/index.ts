


import { Chart, LineSeries, DateTime, Legend, Tooltip, ILoadedEventArgs, ChartTheme,Category, ColumnSeries, } from '@syncfusion/ej2-charts';
import { Browser } from '@syncfusion/ej2-base';
Chart.Inject(LineSeries, DateTime,Category, ColumnSeries, Legend, Tooltip);

/**
 * Sample for Line series
 */
export let data: Object[] = [
  {group: { x: 'Aaa', y: 10}, y: 20},
  {group: { x: 'Baa', y: 30}, y: 10}
];
    let chart: Chart = new Chart({

        //Initializing Primary X Axis
        primaryXAxis: {
                valueType: 'Category'
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Column',
                dataSource: data,
                enableComplexProperty: true,
                xName: 'group.x', yName: 'group.y',
            },
             {
                type: 'Column',
                dataSource: data,
                enableComplexProperty: true,
                xName: 'group.x', yName: 'y',
            },
        ]
    }, '#element');



