var chartData = [
    { country: "USA",       gold: 50 },
    { country: "China",     gold: 40 },
    { country: "Japan",     gold: 70 },
    { country: "Australia", gold: 60 },
    { country: "France",    gold: 50 },
    { country: "Germany",   gold: 40 },
    { country: "Italy",     gold: 40 },
    { country: "Sweden",    gold: 30 }
];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Countries'
    },
    primaryYAxis: {
        minimum: 0, 
        maximum: 80,
        interval: 20, 
        title: 'Medals'
    },
    series: [
        {
            dataSource: chartData,
            xName: 'country', yName: 'gold',
            name: 'Gold', type: 'Column',
            border: { width: 2, color: 'grey' }
        }
    ],
    title: 'Olympic Medals',
    legendSettings: { visible: false },
    chartArea: {
        border: { width: 2, color: 'blue' },
        // margin of the chart area
        margin: { left: 50, right: 50, top: 50, bottom: 50 }
    },
    border: { width: 2, color: 'green' }
}, '#element');

