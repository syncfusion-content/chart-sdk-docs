


import { Chart, ColumnSeries, Category, IAxisLabelRenderEventArgs } from '@syncfusion/ej2-charts';
import { categoryData } from './datasource.ts';
Chart.Inject(ColumnSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        border: { width: 1, type: 'Rectangle' , color: 'red'}
    },
    series:[{
        dataSource: categoryData,
        xName: 'country', yName: 'gold',
        type: 'Column'
    }],
    axisLabelRender : (args : IAxisLabelRenderEventArgs ) => {
        if(args.text === 'France') {
            args.labelStyle.color = 'Red';
        }
    }

}, '#element');



