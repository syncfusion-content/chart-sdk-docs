var chartData = [
   {x: 1, y: 20},{x: 2, y: 22},{x: 3, y: 0},{x: 4, y: 12},{x: 5, y: 5},
   {x: 6, y: 15},{x: 7, y: 6},{x: 8, y: 12},{x: 9, y: 34},{x: 10, y: 7},
];
var chart= new ej.charts.Chart({
    primaryXAxis: {
        title: 'Overs',
        stripLines:[
            { startFromOrigin: true, size: 4, zIndex: 'Behind', opacity: 0.5}
        ]
    },
    primaryYAxis: {
        title: 'Runs'
    },
    series:[{
        dataSource: chartData,
        xName: 'x', yName: 'y',
        type: 'Column',
        marker: { dataLabel: { visible: true }}
    }],
    title: 'India Vs Australia 1st match',
}, '#element');

