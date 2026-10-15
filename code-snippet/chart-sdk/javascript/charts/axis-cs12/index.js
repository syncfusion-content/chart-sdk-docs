var chartData = [
    { x: 'Q1', y: 35 },
    { x: 'Q2', y: 28 },
    { x: 'Q3', y: 34 },
    { x: 'Q4', y: 32 }
];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        valueType: 'Category',
        // customize label style
        labelStyle: {
            color: '#1f77b4',
            fontFamily: 'Arial',
            fontSize: '14px',
            fontWeight: 'bold'
        },
        title: 'Quarters'
    },
    primaryYAxis: {
        minimum: 0, maximum: 40,
        interval: 10,
        title: 'Sales Value'
    },
    series: [{
        dataSource: chartData,
        xName: 'x', yName: 'y',
        name: 'Quarterly Sales', type: 'Column'
    }],
    title: 'Labels Customization - Label Style'
}, '#element');


