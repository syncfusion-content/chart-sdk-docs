

import { Sparkline } from '@syncfusion/ej2-charts';

let sparkline: Sparkline = new Sparkline({
    containerArea: {
        border: { color: '#033e96', width: 2 }
    },
    // To render sparkline with padding
    padding: { left: 20, right: 20, bottom: 20, top: 20},
    border: { color: '#033e96', width: 1 },
    height: '200px',
    width: '350px',
    type: 'Area',
    fill: '#b2cfff',
    dataSource: [3, 6, 4, 1, 3, 2, 5]
});
sparkline.appendTo("#element");



