var chartData = [
    { country: 'USA', gold: 50 },
    { country: 'China', gold: 40 },
    { country: 'Japan', gold: 70 },
    { country: 'Australia', gold: 60 },
    { country: 'France', gold: 50 },
    { country: 'Germany', gold: 40 },
    { country: 'Italy', gold: 40 },
    { country: 'Sweden', gold: 30 }
];

var colors = [
    '#00bdae',
    '#404041',
    '#357cd2',
    '#e56590',
    '#f8b883',
    '#70ad47',
    '#dd8abd',
    '#7f84e8'
];

var shapes = [
    'Circle',
    'Diamond',
    'Triangle',
    'Rectangle',
    'Pentagon',
    'InvertedTriangle',
    'VerticalLine',
    'HorizontalLine'
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
        dataSource: chartData,
        xName: 'country',
        yName: 'gold',
        name: 'Gold',
        type: 'Line',
        width: 2,
        marker: {
            visible: true,
            width: 12,
            height: 12,
            dataLabel: {
                visible: true,
                position: 'Top',
                border: {
                    width: 1
                },
                font: {
                    fontWeight: '600'
                }
            }
        }
    }],

    // Customize the marker shape and fill color of each point.
    pointRender: function(args) {
        var pointIndex = args.point.index;

        args.fill = colors[pointIndex];
        args.shape = shapes[pointIndex];
    },

    // Customize the color and border of each data label.
    textRender: function(args) {
        var pointIndex = args.point.index;

        args.color = colors[pointIndex];
        args.border.color = colors[pointIndex];
    },

    title: 'Point and Text Customization'
}, '#element');