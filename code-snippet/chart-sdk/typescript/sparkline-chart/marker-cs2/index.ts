

import { Sparkline } from '@syncfusion/ej2-charts';

 let sparkline: Sparkline = new Sparkline({
    height: '200px',
    width: '350px',
    axisSettings: {
        minX: -1, maxX: 7, maxY: 7, minY: -1
    },
    dataSource:   [3, 6, 4, 1, 3, 2, 5],
    // To enable marker for high and low points with color customization
    highPointColor: 'blue',
    lowPointColor: 'red',
    markerSettings: {
        visible: ['High', 'Low']
    }
});
sparkline.appendTo("#element");



