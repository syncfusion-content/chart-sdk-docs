var chartData = [
    { country: "USA", gold: 50, silver: 70, bronze: 45 },
    { country: "China", gold: 40, silver: 60, bronze: 55 },
    { country: "Japan", gold: 70, silver: 60, bronze: 50 },
    { country: "Australia", gold: 60, silver: 56, bronze: 40 }
];
var chart3D = new ej.charts.Chart3D({
    textRender: function(args) {
        if (args.point.index === 2) {
            args.text = 'Label';
        }
        else {
            args.cancel = true;
        }
    },
    primaryXAxis: {
        valueType: 'Category',
    },
    series:[{
        dataSource: chartData,
        xName: 'country', yName: 'gold',
        type: 'Column',
        dataLabel: {
            visible: true
        }
    }],
    title: 'Olympic Medals',
    wallColor: 'transparent',
    enableRotation: true,
    rotation: 7,
    tilt: 10,
    depth: 100
}, '#element');

