
var chart3D = new ej.charts.Chart3D({
    primaryXAxis: {
        valueType: 'Category',
    },
    series: [
        {
            type: 'Column', columnFacet: 'Cylinder', xName: 'x', yName: 'y', columnWidth: 0.9,
            dataSource: [{ x: 'Czechia', y: 1.11 }, { x: 'Spain', y: 1.66 },  { x: 'USA', y: 1.56 },{ x: 'Germany', y: 3.1 }, { x: 'Russia', y: 1.35 },   { x: 'Slovakia', y: 1 }, { x: 'South Korea', y: 3.16 },{ x: 'France', y: 0.92 }]
        },
        
    ],
    wallColor: 'transparent',
    enableRotation: true,
    rotation: 7,
    tilt: 10,
    depth: 100
}, '#element');

