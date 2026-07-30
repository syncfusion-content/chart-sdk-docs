var numData = [
    { x: 2005, y: 28 }, { x: 2006, y: 25 },
    { x: 2007, y: 26 }, { x: 2008, y: 27 },
    { x: 2009, y: 32 }, { x: 2010, y: 35 }, { x: 2011, y: 30 }];
var chart3D = new ej.charts.Chart3D({
    primaryXAxis: {
        valueType: 'Category',
    },
    series: [
        {
          dataSource: numData,
          xName: 'x',
          yName: 'y',
          opacity: 0.5,
          fill: 'blue',
          // Series type as bar series
          type: 'Bar',
        },
      ],
    wallColor: 'transparent',
    enableRotation: true,
    rotation: 7,
    tilt: 10,
    depth: 100
}, '#element');

