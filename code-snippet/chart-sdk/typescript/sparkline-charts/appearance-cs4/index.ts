

import { Sparkline, SparklineTooltip } from '@syncfusion/ej2-charts';
Sparkline.Inject(SparklineTooltip);
document.getElementById('container').style = 'background: #000000; margin-top: 15%;';

let sparkline: Sparkline = new Sparkline({
    // To specify theme
    theme: 'HighContrast',
    dataLabelSettings: { visible: ['All']},
    tooltipSettings: {
        trackLineSettings: { visible: true }
    },
    axisSettings: {
        minX: -1, maxX: 7
    },
    lineWidth: 3,
    border: { color: 'transparent', width: 2 },
    height: '200px',
    width: '350px',
    type: 'Line',
    fill: '#007dd1',
    dataSource: [3, 6, 4, 1, 3, 2, 5]
});
sparkline.appendTo("#element");



