
var chartData = [
    { x: "South Korea", y: 39.4 }, { x: "India", y: 61.3 }, { x: "Pakistan", y: 20.4 },
    { x: "Germany", y: 65.1 }, { x: "Australia", y: 15.8 }, { x: "Italy", y: 29.2 },
    { x: "United Kingdom", y: 44.6 }, { x: "Saudi Arabia", y: 9.7 }, { x: "Russia", y: 40.8 },
    { x: "Mexico", y: 31 }, { x: "Brazil", y: 75.9 }, { x: "China", y: 51.4 }
];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        title: 'Countries',
        valueType: 'Category',
        //label intersect as hide
        labelIntersectAction: 'Hide'
    },
    primaryYAxis: {
        minimum: 0, maximum: 80, interval: 10,
        title: 'People(in millions)'
    },
    axes:[
        {
            majorGridLines: { width: 0 },
            rowIndex: 0, opposedPosition: true,
            lineStyle: { width: 0 },
            minimum: 24, maximum: 36, interval: 2,
            name: 'yAxis', title: 'Temperature (Celsius)',
            labelFormat: '{value}°C'
        }
    ],
    series:[{
        dataSource: chartData,
        xName: 'x', yName: 'y',
        name: 'Internet', type: 'Column'
    }],
    title: 'Internet Users'
}, '#element');

