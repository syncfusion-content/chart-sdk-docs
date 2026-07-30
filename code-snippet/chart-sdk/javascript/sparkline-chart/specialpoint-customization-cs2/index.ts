

import { Sparkline } from '@syncfusion/ej2-charts';

let sparkline: Sparkline = new Sparkline({
    height: '150px',
     width: '130px',
     dataSource: [12, 15, -10, 13, 15, 6, -12, 17, 13, 0, 8, -10],
     // Assign the 'WinLoss' as type of Sparkline
     type:'WinLoss',
     // Assign "Numeric" as the value type of the sparkline
     valueType: 'Numeric',
     tiePointColor:'blue'
 });
sparkline.appendTo("#element");



