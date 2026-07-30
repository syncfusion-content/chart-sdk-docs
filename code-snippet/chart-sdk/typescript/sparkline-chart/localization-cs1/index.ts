

import { Sparkline, SparklineTooltip } from '@syncfusion/ej2-charts';
Sparkline.Inject(SparklineTooltip);

let sparkline: Sparkline = new Sparkline({
    containerArea: {
        border: { color: '#033e96', width: 2 }
    },
    tooltipSettings: {
        visible: true
    },
    // To specify currency format
    format: 'c0',
    useGroupingSeparator: true,
    lineWidth: 3,
    padding: { left: 20, right: 20, bottom: 20, top: 20},
    border: { color: '#033e96', width: 2 },
    height: '200px',
    width: '350px',
    type: 'Area',
    fill: '#b2cfff',
    dataSource: [30000, 60000, 40000, 10000, 30000, 20000, 50000]
});
sparkline.appendTo("#element");



