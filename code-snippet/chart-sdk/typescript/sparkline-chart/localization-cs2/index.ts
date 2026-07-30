

import { Sparkline } from '@syncfusion/ej2-charts';

let sparkline: Sparkline = new Sparkline({
    height: '150px',
    width: '150px',
    enableRtl: true,
    dataSource:   [0, 6, 4, 1, 3, 2, 5]
});
sparkline.appendTo("#element");



