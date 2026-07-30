var chartData = [
     { x: 'Income', y: 4711 }, { x: 'Sales', y: -1015 },
     { x: 'Development', y: -688 },
     { x: 'Revenue', y: 1030 }, {x: 'Balance'},
     { x: 'Administrative', y: -780 },
     { x: 'Expense', y: -361 }, { x: 'Tax', y: -695 },
     { x: 'Net Profit'}
];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        valueType: 'Category'
    },
    primaryYAxis:
    {
        labelFormat: '${value}M'
    },
    series: [
        {
            dataSource: chartData,
            xName: 'x', yName: 'y', 
            intermediateSumIndexes: [4], 
            sumIndexes: [8],
            //Series type as Waterfall
            type: 'Waterfall', 
            summaryFillColor: "black", 
            negativeFillColor:'green',
            connector: { color: 'blue', width: 1.5 },
            marker: {
                dataLabel: {
                    visible: true,
                    position: 'Outer',
                    font: { size: '11px' }
                }
            }
        }
    ],
    title: 'Company Revenue and Profit'
}, '#element');


