

import { Sparkline } from '@syncfusion/ej2-charts';

 let sparkline: Sparkline = new Sparkline({
    height: '150px',
     width: '150px',
     lineWidth: 2,
     fill: '#0d3c9b',
     dataSource:   [0, 6, 4, 1, 3, 2, 5],
     rangeBandSettings: [
             {
                 startRange: 1,
                 endRange: 2,
                 color: '#bfd4fc',
                 opacity:0.4
             },
             {
                 startRange: 4,
                 endRange: 5,
                 color: 'red',
                 opacity:0.4
             }
         ]
 });
sparkline.appendTo("#element");



