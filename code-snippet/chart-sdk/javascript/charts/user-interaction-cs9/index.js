var chart = new ej.charts.Chart({
 primaryXAxis: {
        valueType: 'DateTime',
        labelFormat: 'y',
        intervalType: 'Years',
        edgeLabelPlacement: 'Shift',
        majorGridLines: { width: 0 }
    },
    //Initializing Primary Y Axis
    primaryYAxis:
    {
        labelFormat: '{value}%',
        rangePadding: 'None',
        minimum: 0,
        maximum: 100,
        interval: 20,
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 }
    },
    chartArea: {
        border: {
            width: 0
        }
    },
    //Initializing Chart Series
    series: [
        {
            type: 'Column',
            dataSource: [
                { x: new Date(2005, 0, 1), y: 21 }, { x: new Date(2006, 0, 1), y: 24 },
                { x: new Date(2007, 0, 1), y: 36 }, { x: new Date(2008, 0, 1), y: 38 },
                { x: new Date(2009, 0, 1), y: 54 }, { x: new Date(2010, 0, 1), y: 57 },
                { x: new Date(2011, 0, 1), y: 70 }
            ],
            xName: 'x', width: 2, marker: {
                visible: true,
                width: 10,
                height: 10
            },
            yName: 'y', name: 'Germany', dragSettings: { enable: true, }
        },
        {
            type: 'Line',
            dataSource: [
                { x: new Date(2005, 0, 1), y: 21 }, { x: new Date(2006, 0, 1), y: 24 },
                { x: new Date(2007, 0, 1), y: 36 }, { x: new Date(2008, 0, 1), y: 38 },
                { x: new Date(2009, 0, 1), y: 54 }, { x: new Date(2010, 0, 1), y: 57 },
                { x: new Date(2011, 0, 1), y: 70 }
            ],
            xName: 'x', width: 2, marker: {
                visible: true,
                width: 10,
                height: 10
            },
            yName: 'y', name: 'Germany', dragSettings: { enable: true, }
        }
    ],

    //Initializing Chart title
    title: 'Inflation - Consumer Price',
    //Initializing User Interaction Tooltip
    tooltip: {
        enable: true
    },
}, '#element');

