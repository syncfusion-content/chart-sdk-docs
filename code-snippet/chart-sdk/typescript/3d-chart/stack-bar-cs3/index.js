var chart3D = new ej.charts.Chart3D({
    primaryXAxis: {
        valueType: 'Category'
    },
    //Initializing Primary Y Axis
    primaryYAxis:
    {
        interval: 20
    },
    //Initializing Chart Series
    series: [
        {
            type: 'StackingBar',
            dataSource: [
                { x: 'Sochi', y: 9 },
                { x: 'Rio', y: 46 },
                { x: 'Pyeongchang', y: 9 },
                { x: 'Tokyo', y: 39 },
                { x: 'Beijing', y: 8 },
            ],
            columnFacet: "Cylinder",
            name: 'America',
            xName: 'x',
            yName: 'y'
        },
        {
            type: 'StackingBar',
            dataSource: [
                { x: 'Sochi', y: 10 },
                { x: 'Rio', y: 4 },
                { x: 'Pyeongchang', y: 11 },
                { x: 'Tokyo', y: 7 },
                { x: 'Beijing', y: 4 },],
            name: 'Canada',
            columnFacet: "Cylinder",
            xName: 'x',
            yName: 'y'
        },
        {
            type: 'StackingBar',
            dataSource: [
                { x: 'Sochi', y: 4 },
                { x: 'Rio', y: 10 },
                { x: 'Pyeongchang', y: 5 },
                { x: 'Tokyo', y: 10 },
                { x: 'Beijing', y: 5 },],
            name: 'France',
            columnFacet: "Cylinder",
            xName: 'x',
            yName: 'y'
        }
    ],
    enableRotation: true,
    rotation: 22,
    depth: 100,
    legendSettings: {
        enableHighlight: true
    },
}, '#element');

