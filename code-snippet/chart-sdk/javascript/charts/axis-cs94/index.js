var chartData = [
    { x: 1, y: 20 },
    { x: 2, y: 22 },
    { x: 3, y: 0 },
    { x: 4, y: 12 },
    { x: 5, y: 5 },
    { x: 6, y: 15 },
    { x: 7, y: 6 },
    { x: 8, y: 12 },
    { x: 9, y: 34 },
    { x: 10, y: 7 }
];

var chart = new ej.charts.Chart({
    primaryXAxis: {
        title: 'Overs',
        minimum: 0,
        maximum: 10,
        interval: 1,
        stripLines: [{
            visible: true,
            startFromAxis: true,
            size: 4,
            sizeType: 'Auto',
            color: '#4CAF50',
            opacity: 0.3,
            border: {
                color: '#1B5E20',
                width: 2
            },
            dashArray: '5,3',
            zIndex: 'Behind',
            text: 'Powerplay',
            textStyle: {
                color: '#1B5E20',
                size: '14px',
                fontFamily: 'Segoe UI',
                fontWeight: '600'
            },
            horizontalAlignment: 'Middle',
            verticalAlignment: 'Middle',
            rotation: 0
        }]
    },
    primaryYAxis: {
        title: 'Runs',
        minimum: 0,
        maximum: 40,
        interval: 10
    },
    series: [{
        dataSource: chartData,
        xName: 'x',
        yName: 'y',
        type: 'Column',
        marker: {
            dataLabel: {
                visible: true
            }
        }
    }],
    title: 'India vs Australia, First Match'
}, '#element');