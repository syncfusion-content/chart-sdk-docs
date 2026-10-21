import {
    Chart,
    ColumnSeries,
    Category,
    IAxisLabelRenderEventArgs
} from '@syncfusion/ej2-charts';

Chart.Inject(ColumnSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Months'
    },
    primaryYAxis: {
        minimum: 0,
        maximum: 60,
        interval: 10,
        title: 'Sales Value'
    },
    series: [{
        dataSource: [
            { x: 'Jan', y: 15 },
            { x: 'Feb', y: 20 },
            { x: 'Mar', y: 35 },
            { x: 'Apr', y: 25 },
            { x: 'May', y: 40 },
            { x: 'Jun', y: 50 }
        ],
        xName: 'x',
        yName: 'y',
        name: 'Monthly Sales',
        type: 'Column'
    }],
    axisLabelRender: (args: IAxisLabelRenderEventArgs): void => {
        // Customize specific X-axis labels
        if (args.axis.name === 'primaryXAxis') {
            if (args.text === 'Mar') {
                args.labelStyle.color = '#ff0000';
                args.labelStyle.fontWeight = 'Bold';
                args.labelStyle.size = '16px';
            }

            if (args.text === 'Jun') {
                args.labelStyle.color = '#008000';
                args.labelStyle.fontWeight = 'Bold';
                args.labelStyle.size = '16px';
            }
        }
    },
    title: 'Customizing Specific Axis Labels'
}, '#element');

chart.appendTo('#element');