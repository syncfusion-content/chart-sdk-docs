


import { Chart, ColumnSeries, Category, MultiLevelLabel } from '@syncfusion/ej2-charts';
import { categoryData, MultiLevelLabel } from './datasource.ts';
Chart.Inject(ColumnSeries, Category, MultiLevelLabel);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
           multiLevelLabels:[{ categories: [
                        {
                            //Start and end values of the multi-level labels accepts number, date and sring values
                            start: -0.5,
                            end: 3.5,
                            //Multi-level label's text.
                            text: 'Half Yearly 1',
                            //Maximum width of the text for multi level labes
                            maximumTextWidth:50
                        },
                        { start: 3.5, end: 7.5, text: 'Half Yearly 2',maximumTextWidth:50 },
                    ]}]
    },
    series:[{
        dataSource: categoryData,
        xName: 'country', yName: 'gold',
        type: 'Column'
    }],

}, '#element');



