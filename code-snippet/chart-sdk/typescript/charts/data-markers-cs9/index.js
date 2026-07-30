var numData = [{ x: 2005, y: 28, y1: 18 }, { x: 2006, y: 25, y1: 10 },{ x: 2007, y: 26, y1: 20 }, { x: 2008, y: 47, y1: 35 },
    { x: 2009, y: 32, y1: 23 }, { x: 2010, y: 35, y1: 25 }, { x: 2011, y: 30, y1: 15 }];

var chart = new ej.charts.Chart({
    series: [
        {
            type: 'Line',
            dataSource: numData, xName: 'x', yName: 'y',
            marker: {
                visible: true
            }
        },
        {
            type: 'Line',
            dataSource: numData, xName: 'x', yName: 'y1',
            marker: {
                visible: true
            }
        }
    ],
}, '#element');