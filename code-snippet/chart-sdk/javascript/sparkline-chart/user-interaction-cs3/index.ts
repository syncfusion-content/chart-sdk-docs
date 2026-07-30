

import { Sparkline, SparklineTooltip } from '@syncfusion/ej2-charts';
Sparkline.Inject(SparklineTooltip);

let sparkline: Sparkline = new Sparkline({
    height: '200px',
    width: '500px',
    axisSettings: {
        minX: -1, maxX: 7, maxY: 8, minY: -1
    },
    fill: '#033e96',
    valueType: 'Category',
    xName: 'x', yName: 'y',
    dataSource:   [{x: 'Mon', y: 3 },{x: 'Tue', y: 5 },{x: 'Wed', y: 2 },{x: 'Thu', y: 4 },{x: 'Fri', y: 6 },],
    // To enable tooltip template for sparkline with fill color, border radius and padding customization
    tooltipSettings: {
        visible: true,
        template: '<div class="sparktooltip">${x} : ${y}<div>'
    }
});
sparkline.appendTo("#element");



