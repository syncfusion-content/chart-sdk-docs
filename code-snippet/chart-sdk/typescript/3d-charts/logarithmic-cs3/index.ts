import { Chart3D, DateTime3D, Legend3D, Logarithmic3D, ColumnSeries3D, Tooltip3D, Highlight3D } from '@syncfusion/ej2-charts';
Chart3D.Inject(ColumnSeries3D, DateTime3D, Logarithmic3D,  Legend3D, Tooltip3D, Highlight3D);

let chartData: Object[] = [
    { x: new Date(1995, 0, 1), y: 80 }, { x: new Date(1996, 0, 1), y: 200 },
    { x: new Date(1997, 0, 1), y: 400 }, { x: new Date(1998, 0, 1), y: 600 },
    { x: new Date(1999, 0, 1), y: 700 }, { x: new Date(2000, 0, 1), y: 1400 },
    { x: new Date(2001, 0, 1), y: 2000 }, { x: new Date(2002, 0, 1), y: 4000 },
    { x: new Date(2003, 0, 1), y: 6000 }, { x: new Date(2004, 0, 1), y: 8000 },
    { x: new Date(2005, 0, 1), y: 11000 }
];

let chart: Chart3D = new Chart3D({
    primaryXAxis: {
        valueType: 'DateTime'
    },
    primaryYAxis:
    {
        valueType: 'Logarithmic',
        logBase: 2
    },
    //Initializing Chart Series
    series: [
        {
            type: 'Column', xName: 'x', yName: 'y', columnSpacing: 0.1,
            dataSource: chartData
        }
    ],
    wallColor: 'transparent',
    enableRotation: true,
    rotation: 7,
    tilt: 10,
    depth: 100
}, '#element');



