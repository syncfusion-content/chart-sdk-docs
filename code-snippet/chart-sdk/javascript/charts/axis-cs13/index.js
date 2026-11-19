var chartData = [
    { x: 'Jan', y: 15 },
    { x: 'Feb', y: 20 },
    { x: 'Mar', y: 35 },
    { x: 'Apr', y: 25 },
    { x: 'May', y: 40 },
    { x: 'Jun', y: 50 }
];

var chart = new ej.charts.Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Months'
    },
    primaryYAxis: {
        minimum: 0, maximum: 60,
        interval: 10,
        title: 'Sales Value'
    },
    series: [{
        dataSource: chartData,
        xName: 'x', yName: 'y',
        name: 'Monthly Sales', type: 'Column'
    }],
    axisLabelRender: function(args) {
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
