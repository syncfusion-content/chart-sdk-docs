import {Chart3D, Category3D, Legend3D, BarSeries3D, Tooltip3D, Highlight3D, Chart3DLoadedEventArgs } from '@syncfusion/ej2-charts';
Chart3D.Inject(BarSeries3D, Category3D, Legend3D, Tooltip3D, Highlight3D);

let numData: object[] = [
    { x: 2005, y: 28 }, { x: 2006, y: 25 },
    { x: 2007, y: 26 }, { x: 2008, y: 27 },
    { x: 2009, y: 32 }, { x: 2010, y: 35 }, { x: 2011, y: 30 }];
  

let chart: Chart3D = new Chart3D({
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



