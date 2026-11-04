// legendRender: customize legend items before they are rendered.
var chartData = [
    { country: 'USA',       gold: 50, silver: 70, bronze: 45 },
    { country: 'China',     gold: 40, silver: 60, bronze: 55 },
    { country: 'Japan',     gold: 70, silver: 60, bronze: 50 },
    { country: 'Australia', gold: 60, silver: 56, bronze: 40 },
    { country: 'France',    gold: 50, silver: 45, bronze: 35 },
    { country: 'Germany',   gold: 40, silver: 30, bronze: 22 },
    { country: 'Italy',     gold: 40, silver: 35, bronze: 37 },
    { country: 'Sweden',    gold: 30, silver: 25, bronze: 27 }
];

var chart = new ej.charts.Chart({
    primaryXAxis: { valueType: 'Category', title: 'Countries' },
    primaryYAxis: { minimum: 0, maximum: 80, interval: 20, title: 'Medals' },
    legendSettings: { visible: true, position: 'Top' },
    title: 'Olympic Medals',
    series: [
        { dataSource: chartData, type: 'Column', xName: 'country', yName: 'gold',   name: 'Gold' },
        { dataSource: chartData, type: 'Column', xName: 'country', yName: 'silver', name: 'Silver' },
        { dataSource: chartData, type: 'Column', xName: 'country', yName: 'bronze', name: 'Bronze' }
    ],
    // Customize legend items before they are rendered
    legendRender: function (args) {
        console.log('Legend render event was triggered');
        switch (args.text) {
            case 'Gold':
                args.text = 'Gold (Au)';
                args.fill = '#FFC107';
                args.shape = 'Circle';
                break;
            case 'Silver':
                args.fill = '#9E9E9E';
                args.shape = 'Rectangle';
                break;
            case 'Bronze':
                args.fill = '#CD7F32';
                args.shape = 'Diamond';
                break;
        }
    }
}, '#element');
