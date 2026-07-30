

import { Sparkline } from '@syncfusion/ej2-charts';

 let sparkline: Sparkline = new Sparkline({
    height: '200px',
    width: '350px',
    axisSettings: {
        minX: -1, maxX: 7, maxY: 8, minY: -1
    },
    fill: 'blue',
    dataSource:   [0, 6, 4, 1, 3, 2, 5],
    // To customize data label fill, border, and text color
    dataLabelSettings: {
        visible: ['All'],
        border: { color: 'blue', width: 1},
        fill: 'blue', opacity: 0.4,
        textStyle: {
            color: 'white'
        }
    },
});
sparkline.appendTo("#element");



