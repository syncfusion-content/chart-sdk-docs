


import { Chart, ColumnSeries, Category, ChartAnnotation } from '@syncfusion/ej2-charts';
import { columnData } from './datasource.ts';
Chart.Inject(ColumnSeries, Category, ChartAnnotation);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
    },
    annotations:[{
        content: '<div style="border: 1px solid black; padidng: 5px 5px 5px 5px, backgrund:#f5f5f5">Highest Medal Count</div>',
        x: 'France',
        y: 50,
        verticalAlignment:'Top',
        horizontalAlignment:'Near'
    }],
    series:[{
        dataSource: columnData,
        xName: 'country', yName: 'gold',
        type: 'Column'
    }],

}, '#element');



