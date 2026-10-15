var chartData = [
    { month: 'Jan', john: 100, peter: 120, david: 80 },
    { month: 'Feb', john: 110, peter: 100, david: 90 },
    { month: 'Mar', john: 125, peter: 140, david: 110 },
    { month: 'Apr', john: 150, peter: 130, david: 120 },
    { month: 'May', john: 140, peter: 160, david: 135 },
    { month: 'Jun', john: 170, peter: 150, david: 145 }
];

var chart = new ej.charts.Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Months'
    },
    primaryYAxis: {
        minimum: 0,
        maximum: 200,
        interval: 50,
        title: 'Expenses'
    },
    series: [
        {
            dataSource: chartData,
            xName: 'month',
            yName: 'john',
            name: 'John',
            type: 'Line',
            width: 2,
            marker: {
                visible: true
            }
        },
        {
            dataSource: chartData,
            xName: 'month',
            yName: 'peter',
            name: 'Peter',
            type: 'Line',
            width: 2,
            marker: {
                visible: true
            }
        },
        {
            dataSource: chartData,
            xName: 'month',
            yName: 'david',
            name: 'David',
            type: 'Line',
            width: 2,
            marker: {
                visible: true
            }
        }
    ],
    selectionMode: 'Series',
    legendSettings: {
        visible: true,
        toggleVisibility: false
    },
    legendClick: function(args) {
        document.getElementById('selectionStatus').textContent =
            'Selected series: ' + args.series.name;
    },
    title: 'Monthly Expenses'
}, '#element');