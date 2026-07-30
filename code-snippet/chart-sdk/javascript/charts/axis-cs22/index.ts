


import { Chart, LineSeries, Category, Legend, DataLabel } from '@syncfusion/ej2-charts';
import { categoryData } from './datasource.ts';
Chart.Inject(LineSeries, Category, Legend, DataLabel);
/**
 * inversed axis sample
 */
    let chart: Chart = new Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
             isInversed: true
        },

        //Initializing Primary Y Axis
        primaryYAxis:
        {
             isInversed: true
        },
        series: [
            {
                type: 'Line',
                dataSource: categoryData,
                xName: 'country',
                yName: 'gold',
            },
        ],
        title: 'Exchange rate',
    }, '#element');



