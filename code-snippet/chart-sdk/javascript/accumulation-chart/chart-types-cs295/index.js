var columnData = [
    { country: "USA",       gold: 50 },
    { country: "China",     gold: 40 },
    { country: "Japan",     gold: 70 },
    { country: "Australia", gold: null },
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
    series: [{
        dataSource: columnData,
        xName: 'country', yName: 'gold',
        // Series type as column series
        type: 'Column',
        emptyPointSettings: {
            mode: 'Average',
            fill: 'red'
        }
    }],
    title: 'Olympic Medals'
}, '#element');

